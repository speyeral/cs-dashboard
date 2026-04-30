// This file is moved to src/components/course/CourseQuiz.jsx
import React, { useState } from 'react';
import { useProgress } from '../../context/ProgressContext';
import styles from './CourseQuiz.module.css';

const PASS_PERCENTAGE = 70; // 70% to pass

const CourseQuiz = ({ course, onComplete, onClose }) => {
  const { completeCourse } = useProgress();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizComplete, setQuizComplete] = useState(false);

  const quiz = course.quiz || [];
  const totalQuestions = quiz.length;
  const progressPercentage = totalQuestions > 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;
  const passingScore = totalQuestions > 0 ? Math.ceil(totalQuestions * (PASS_PERCENTAGE / 100)) : 0;

  const handleAnswerClick = (index) => {
    if (answered) return;

    setSelectedAnswer(index);
    const isCorrect = index === quiz[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      // Quiz is complete. The score is already up-to-date from the last handleAnswerClick call.
      setQuizComplete(true);
    }
  };

  const handleClaimXP = () => {
    // The button to call this is only shown if the user passed, so no extra check is needed.
    completeCourse(course.id);
    onComplete();
  };

  if (!quiz || quiz.length === 0) {
    return (
      <div className={styles.container}>
        <p>No quiz available for this course.</p>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;
    const passed = score >= passingScore;
    const xpReward = passed ? Math.round((score / totalQuestions) * course.xp) : 0;

    return (
      <div className={styles.container}>
        <div className={styles.resultCard}>
          <div className={`${styles.resultHeader} ${passed ? styles.passed : styles.failed}`}>
            <h2>{passed ? '🎉 Congratulations!' : '📚 Keep Learning'}</h2>
            <p>{passed ? 'You passed the quiz!' : 'Try again to pass the quiz'}</p>
          </div>

          <div className={styles.scoreSection}>
            <div className={styles.scoreCircle}>
              <div className={styles.scoreNumber}>{percentage}%</div>
              <div className={styles.scoreLabel}>Score</div>
            </div>

            <div className={styles.scoreDetails}>
              <div className={styles.scoreRow}>
                <span>Questions Correct:</span>
                <strong>{score}/{totalQuestions}</strong>
              </div>
              <div className={styles.scoreRow}>
                <span>Pass Required:</span>
                <strong>{PASS_PERCENTAGE}% ({passingScore}/{totalQuestions})</strong>
              </div>
              <div className={styles.scoreRow}>
                <span>XP Earned:</span>
                <strong className={styles.xpValue}>{xpReward} / {course.xp}</strong>
              </div>
            </div>
          </div>

          {passed && (
            <button className={styles.claimButton} onClick={handleClaimXP}>
              Claim {xpReward} XP & Complete Course
            </button>
          )}

          {!passed && (
            <button className={styles.retryButton} onClick={onClose}>
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  const question = quiz[currentQuestion];
  const isAnswered = answered;
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{course.title}</h3>
        <span className={styles.questionCounter}>
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
      </div>

      <div className={styles.progressBarContainer}>
        <div className={styles.progressBar} style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className={styles.questionCard}>
        <h4 className={styles.question}>{question.question}</h4>

        <div className={styles.optionsContainer}>
          {question.options.map((option, index) => {
            const isCorrectOption = index === question.correct;
            const isSelectedOption = index === selectedAnswer;

            let optionClass = styles.option;
            if (isAnswered) {
              if (isCorrectOption) {
                optionClass += ` ${styles.correct}`;
              } else if (isSelectedOption && !isCorrectOption) {
                optionClass += ` ${styles.incorrect}`;
              } else if (!isSelectedOption) {
                optionClass += ` ${styles.disabled}`;
              }
            } else if (isSelectedOption) {
              optionClass += ` ${styles.selected}`;
            }

            return (
              <button
                key={index}
                className={optionClass}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
              >
                <span className={styles.optionLabel}>{String.fromCharCode(65 + index)}.</span>
                <span className={styles.optionText}>{option}</span>
                {isAnswered && isCorrectOption && <span className={styles.checkmark}>✓</span>}
                {isAnswered && isSelectedOption && !isCorrectOption && (
                  <span className={styles.cross}>✗</span>
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <button
            className={styles.nextButton}
            onClick={handleNextQuestion}
          >
            {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseQuiz;
