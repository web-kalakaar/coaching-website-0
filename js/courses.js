const coursesContainer = document.getElementById("courses-list");

function renderCourses() {
  coursesContainer.innerHTML = coursesData
    .map(
      (course) => `
    <article class="course reveal" id="course-${course.id}">

      <h3 class="course-head">
        <button
          class="course-toggle"
          type="button"
          id="btn-${course.id}"
          aria-expanded="false"
          aria-controls="panel-${course.id}"
        >

          <span class="c-num" aria-hidden="true">
            ${course.number}
          </span>

          <span class="c-title">
            <strong>${course.title}</strong>
            <small>${course.exams}</small>
          </span>

          <span class="c-chips">
            <span class="hide-md">${course.duration}</span>
            <span class="hide-md">${course.mode}</span>
            <span class="chip-gold">${course.nextBatch}</span>
          </span>

          <span class="c-chev" aria-hidden="true"></span>

        </button>
      </h3>

      <div
        class="course-panel"
        id="panel-${course.id}"
        role="region"
        aria-labelledby="btn-${course.id}"
      >

        <div class="panel-clip">
          <div class="panel-inner">

            <p class="panel-intro">
              ${course.intro}
            </p>

            <!-- Course facts -->
            <div class="facts">

              <div class="fact">
                <small>Duration</small>
                <b>${course.duration}</b>
              </div>

              <div class="fact">
                <small>Mode</small>
                <b>${course.mode}</b>
              </div>

              <div class="fact">
                <small>Medium</small>
                <b>${course.medium}</b>
              </div>

              <div class="fact">
                <small>Course fee</small>
                <b>${course.fee}</b>
              </div>

              <div class="fact">
                <small>Eligibility</small>
                <b>${course.eligibility}</b>
              </div>

            </div>

            <!-- Batch timings -->
            <h4 class="panel-h">
              Upcoming batches and timings
            </h4>

            <table class="batch-table">

              <thead>
                <tr>
                  <th scope="col">Batch</th>
                  <th scope="col">Starts</th>
                  <th scope="col">Days</th>
                  <th scope="col">Timing</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Seats</th>
                </tr>
              </thead>

              <tbody>
                ${course.batches
                  .map(
                    (batch) => `
                  <tr>
                    <td data-label="Batch">${batch.name}</td>
                    <td data-label="Starts">${batch.starts}</td>
                    <td data-label="Days">${batch.days}</td>
                    <td data-label="Timing">${batch.timing}</td>
                    <td data-label="Mode">${batch.mode}</td>
                    <td data-label="Seats">
                      <span class="seat ${batch.low ? "low" : ""}">
                        ${batch.seats}
                      </span>
                    </td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>

            </table>

            <!-- Subjects and features -->
            <div class="panel-cols">

              <div>
                <h4 class="panel-h">
                  Subjects and teachers
                </h4>

                <ul class="subj-list">
                  ${course.subjects
                    .map(
                      (subject) => `
                    <li>
                      <span>${subject.name}</span>
                      <em>${subject.teacher}</em>
                    </li>
                  `,
                    )
                    .join("")}
                </ul>
              </div>

              <div>
                <h4 class="panel-h">
                  What is included
                </h4>

                <ul class="tick-list">
                  ${course.included
                    .map(
                      (item) => `
                    <li>${item}</li>
                  `,
                    )
                    .join("")}
                </ul>
              </div>

            </div>

            <!-- Footer -->
            <div class="panel-foot">

              <p>
                <b>${course.fee}</b> for the full course,
                payable in instalments.
                ${course.scholarship}
              </p>

              <div class="actions">

                <a
                  class="btn btn--gold btn--sm"
                  href="#contact"
                  data-course="${course.title}"
                >
                  Book free demo
                </a>

                <a
                  class="btn btn--line btn--sm"
                  href="tel:+919876543210"
                >
                  Call +91 98765 43210
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>

    </article>
  `,
    )
    .join("");
}

// Render all courses
renderCourses();
