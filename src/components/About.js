import React from "react";

export default function About() {
  return (
    <div>
      
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            About TextAssistant
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            This is a basic text manipulation application. You can convert your text into uppercase, lowercase, titlecase.
            You can also check the number of characters and words in the text and approximate time needed to read that text.
            <br />
            This entire application is created by ReactJS and it is still under development. More updates and handy features to be added by the developer soon.
            <br />
            Thank you for using.
          </div>
        </div>
      </div>
    </div>
  );
}
