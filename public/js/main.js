var GoalTypeArr = [
  {
    name: "Goal Planner",
    description:
      "Plan and track your long-term objectives with a comprehensive goal-setting tool.",
    image: "public/image/Goal Planner.jpg",
    alt: "Goal Planner dashboard",
  },
  {
    name: "Yearly Goal",
    description:
      "Set and manage your annual goals with a structured 12-month planning system.",
    image: "public/image/Year Planner.jpg",
    alt: "Yearly goal tracker",
  },
  {
    name: "Monthly Goal",
    description:
      "Break down your yearly goals into actionable monthly milestones.",
    image: "public/image/Monthly Planner.jpg",
    alt: "Monthly goal planner",
  },
  {
    name: "Weekly Goal",
    description:
      "Organize tasks and priorities week-by-week for steady progress.",
    image: "public/image/Weekly Planner.jpg",
    alt: "Weekly goal schedule",
  },
  {
    name: "Daily Goal",
    description:
      "Focus on daily tasks to maintain productivity and achieve short-term targets.",
    image: "public/image/Daily Planner.jpg",
    alt: "Daily goal checklist",
  },
];

var GoalListArr = [
  {
    name: "Test",
    description: "test",
    reason: "test",
    created_at: "11-02-2024",
    updated_at: "11-02-2024",
  },
];

var planArr = [
  {
    name: "yearly",
    id: "yearlyGoalListView",
    data: [
      {
        name: "Test",
        description: "test",
        reason: "test",
        created_at: "11-02-2024",
        updated_at: "11-02-2024",
      },
    ],
  },
  {
    name: "monthly",
    id: "monthlyGoalListView",
    data: [
      {
        name: "Test",
        description: "test",
        reason: "test",
        created_at: "11-02-2024",
        updated_at: "11-02-2024",
      },
    ],
  },
  {
    name: "weekly",
    id: "weeklyGoalListView",
    data: [
      {
        name: "Test",
        description: "test",
        reason: "test",
        created_at: "11-02-2024",
        updated_at: "11-02-2024",
      },
    ],
  },
  {
    name: "daily",
    id: "dailyGoalListView",
    data: [
      {
        name: "Test",
        description: "test",
        reason: "test",
        created_at: "11-02-2024",
        updated_at: "11-02-2024",
      },
    ],
  },
];

function prepareGoalTypeContent() {
  let content = "";
  if (GoalTypeArr.length > 0) {
    GoalTypeArr.forEach((data, index) => {
      content += `
                <div class="card" style="width: 18rem;">
                    <img src="${data.image}" class="card-img-top" alt="${
        data.alt
      }">
                    <div class="card-body" id="goal_cards">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.description}</p>
                        <div class="action_button">
                            <hr>
                            <button href="#" class="btn btn-primary" id="openGoalModal" type="${data.name
                              .toLowerCase()
                              .replaceAll(
                                " ",
                                "_"
                              )}"><i class="bi bi-plus-circle-fill"></i></button>
                            <button href="#" class="btn btn-primary" type="${data.name
                              .toLowerCase()
                              .replaceAll(
                                " ",
                                "_"
                              )}"><i class="bi bi-eye-fill"></i></button>
                        </div>
                    </div>
                </div>
            `;
    });
  } else {
    content = "Something went wrong please content admin.";
  }

  $("#goal_time_planner").html(content);
}

prepareGoalTypeContent();

// Goal List View Code

function prepareGoalListViewContent() {
  let content = `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Sl</th>
                <th>name</th>
                <th>description</th>
                <th>reason</th>
                <th>Create date</th>
                <th>updated date</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
    `;

  if (GoalListArr.length > 0) {
    GoalListArr.forEach((data, index) => {
      content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${data.name}</td>
                    <td>${data.description}</td>
                    <td>${data.reason}</td>
                    <td>${data.created_at}</td>
                    <td>${data.updated_at}</td>
                    <td>
                        <div class="table_action text-center">
                            <button href="#" class="btn btn-success"><i class="bi bi-pencil-fill"></i></button>
                            <button href="#" class="btn btn-danger"><i class="bi bi-trash2-fill"></i></button>
                        </div>
                    </td>
                </tr>
            `;
    });
  }

  content += "</tbody></table>";

  $("#goalListView").html(content);
}

prepareGoalListViewContent();

// Goal List View Code

function prepareMainGoalListViewContent(id, data) {
  let content = `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>Sl</th>
                <th>Type</th>
                <th>name</th>
                <th>description</th>
                <th>reason</th>
                <th>Create date</th>
                <th>updated date</th>
                <th>Status</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
    `;

  if (data.length > 0) {
    data.forEach((data, index) => {
      let status = "",
        status_backgound = "";
      if (data.status == "pending") {
        status = `<span class="badge text-warning-emphasis">
            <i class="bi bi-hourglass"></i>
        </span>`;
        status_backgound = "bg-warning-subtle";
      } else if (data.status == "completed") {
        status = `<span class="badge text-success-emphasis">
            <i class="bi bi-check-circle"></i>
        </span>`;
        status_backgound = "bg-success-subtle";
      } else {
        status = `<span class="badge text-danger-emphasis">
            <i class="bi bi-x-circle-fill"></i>
        </span>`;
        status_backgound = "bg-danger-subtle";
      }

      content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${data.type}</td>
                    <td>${data.name}</td>
                    <td>${data.description}</td>
                    <td>${data.reason}</td>
                    <td>${data.created_at}</td>
                    <td>${data.updated_at}</td>
                    <td><div class="text-center d-flex justify-content-center "><p class="goal_status ${status_backgound}" id="${id}_status">${status}</p></div></td>
                    <td>
                        <div class="table_action text-center">
                            <button href="#" class="btn btn-success"><i class="bi bi-pencil-fill"></i></button>
                            <button href="#" class="btn btn-danger"><i class="bi bi-trash2-fill"></i></button>
                        </div>
                    </td>
                </tr>
        `;
    });
  }

  content += "</tbody></table>";

  $("#" + id).html(content);
}

planArr.forEach((data, index) => {
  prepareMainGoalListViewContent(data.id, data.data);
});

var modelData = [
  {
    name: "goal",
    id: "goalModal",
  },
  {
    name: "year",
    id: "yearModal",
  },
  {
    name: "month",
    id: "monthModal",
  },
  {
    name: "week",
    id: "weekModal",
  },
  {
    name: "daily",
    id: "dailyModal",
  },
];

// function modelPrepare(modelData) {
//   let modalContent = "";
//   modelData.forEach((data, index) => {
//     modalContent += `
//       <div class="modal" id="${data.id}" tabindex="-1">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title">Modal title</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div class="modal-body">
//               <p>Modal body text goes here.</p>
//             </div>
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary" type="${data.name}">Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>`;
//   });

//   console.log(modalContent);
//   $("body").append(modalContent);
// }

// modelPrepare(modelData);

$(document).on("click", "#openGoalModal", function (e) {
  $("#goalModalTitle").text(
    "Create New " + $(this).parent().prev().prev().text()
  );
  $("#save_update_goal").text("save");
  $('#goal_type,[for="goal_type"]').hide();
  if ($(this).attr("type") != "goal_planner") {
    $('#goal_type,[for="goal_type"]').show();
  }
  $("#goalModal").modal("show");
});
