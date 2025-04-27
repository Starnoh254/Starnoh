import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-900 w-screen text-teal-400 min-h-screen px-10 pt-10 pb-10">
      <div>
        <p className="text-gray-100 text-xl">
          Hi , I'm{" "}
          <span className="text-4xl font-bold text-teal-400 font-heading">
            Starnoh John
          </span>
        </p>
        <p className="text-2xl text-gray-100 font-bold font-body">
          Software Developer | Problem solver
        </p>
      </div>

      <div className="mt-10">
        <h1 className="font-bold text-3xl">About me</h1>
        <br />
        <p className="font-body text-gray-100">
          I help businesses turn ideas into powerful, scalable, and
          user-friendly digital solutions.
          <br />
          <br />
          Whether it's optimizing operations, building apps that drive revenue,
          or creating websites that convert visitors into loyal customers — I
          don't just write code, I deliver results that matter.
          <br />
          <br />
          My focus is simple: helping businesses save time, increase revenue,
          and deliver outstanding customer experiences.
          <br />
          <br />
          Beyond development, I deeply understand business needs and challenges.
          I create solutions that:
          <ul style={{ marginLeft: "1.5rem", listStyleType: "disc" }}>
            <li>Improve customer satisfaction</li>
            <li>Streamline operations</li>
            <li>Boost sales and growth</li>
            <li>Strengthen brand presence</li>
          </ul>
          <br />
          When you work with me, you're not just hiring a developer — you're
          partnering with someone who thinks strategically, solves real-world
          problems, and is committed to your business success.
        </p>
      </div>
    </div>
  );
}

