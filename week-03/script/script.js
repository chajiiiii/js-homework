const tabs = document.querySelectorAll(".tabs button");
const contents = document.querySelectorAll(".tab-content");

const SELECTED_CLASS_NAME = "is-selected";

let selectedIndex = -1;

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs.item(i);

  if (tab.classList.contains(SELECTED_CLASS_NAME)) {
    selectedIndex = i;
    break;
  }
}

tabs.forEach((tab, activeIndex) => {
  tab.addEventListener("click", () => {
    if (selectedIndex > -1) {
      const activeTab = tabs.item(selectedIndex);
      activeTab.classList.remove(SELECTED_CLASS_NAME);

      const activeContent = contents.item(selectedIndex);
      activeContent.classList.remove(SELECTED_CLASS_NAME);

      const selectedTab = tabs.item(activeIndex);
      selectedTab.classList.add(SELECTED_CLASS_NAME);

      const selectedContent = contents.item(activeIndex);
      selectedContent.classList.add(SELECTED_CLASS_NAME);

      selectedIndex = activeIndex;
    }
  });
});

// -----------------------------------------------

// tabs.addEventListener("click", handleTabChange);

// function handleTabChange(e) {
//   const selectedTab = e.target.closest("button");

//   if (selectedTab.classList.contains("is-selected")) {
//     console.log("HI");
//   } else if {

//   }
//   console.log(selectedTab);
// }

// -----------------------------------------------

// const tabs = document.querySelectorAll(".tab");
// const contents = document.querySelectorAll(".tab-content");

// let selectedIndex = -1;

// const SELECTED_CLASS_NAME = "is-selected";

// for (let i = 0; i < tabs.length; i++) {
//   const tab = tabs.item(i);

//   if (tab.classList.contains(SELECTED_CLASS_NAME)) {
//     selectedIndex = i;
//     break;
//   }
// }

// function handleTabChange(event) {
//   if (selectedIndex > -1) {
//     const tab = event.target;
//     console.log(tabs.tab);

//     const selectedTab = tabs.item(selectedIndex);
//     selectedTab.classList.remove(SELECTED_CLASS_NAME);

//     const selectedContent = contents.item(selectedIndex);
//     selectedContent.classList.remove(SELECTED_CLASS_NAME);

//     const activeTab = tabs.item(activeIndex);
//     activeTab.classList.add(SELECTED_CLASS_NAME);

//     const activeContent = contents.item(activeIndex);
//     activeContent.classList.add(SELECTED_CLASS_NAME);

//     selectedIndex = activeIndex;
//   }
// }

// tabs.forEach((tab, activeIndex) => {
//   tab.addEventListener("click", handleTabChange);
// });
