import React from "react";

export const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover our top-rated workout sessions tailored for your fitness
          goals.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our featured bootcamps designed to push your limits and achieve
          your fitness milestones.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Powerlifting Perfection</h4>
            <p>
              Build muscle and master the art of lifting with our power-packed
              strength programs.
            </p>
          </div>
          <div>
            <h4>Yoga for Flexibility and Strength</h4>
            <p>Balance your body and mind with rejuvenating yoga sessions.</p>
          </div>
          <div>
            <h4>Endurance Evolution</h4>
            <p>
              Train for stamina and resilience with our endurance-focused
              exercises.
            </p>
          </div>
          <div>
            <h4>Weight Training Wonders</h4>
            <p>
              Learn the best techniques to lift weights safely and effectively.
            </p>
          </div>
          <div>
            <h4>Crush Your Goals, One Rep at a Time</h4>
            <p>
            Because every rep brings you closer to the best version of yourself.
            </p>
          </div>
          <div>
            <h4>Cardio Champions</h4>
            <p>
            Get your heart racing with high-intensity cardio workouts tailored for maximum burn.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
