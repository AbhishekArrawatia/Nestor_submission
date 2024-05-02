function createTab(title) {
  const tabWrapper = document.querySelector(".tabs");

  const tab = document.createElement("div");
  tab.setAttribute("id", `#${title}-tab`);
  tab.classList.add("tab");
  tab.innerHTML = title;

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "x";
  closeBtn.onclick = function () {
    tab.remove();
    const tabContentElement = document.querySelector(`#${title}-content`);
    tabContentElement.remove();
    checkForBanner();
  };

  tab.appendChild(closeBtn);

  const tabContent = document.createElement("div");
  tabContent.classList.add("new-tab");
  tabContent.setAttribute("id", `${title}-content`);

  const inputForm = document.createElement("div");
  inputForm.classList.add("inputForm");

  const inputElement = document.createElement("INPUT");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("id", `${title}-input`);
  inputElement.classList.add("input");
  inputElement.setAttribute("placeholder", "please enter the URL");

  const submitButton = document.createElement("button");
  submitButton.innerHTML = `<i class="fa fa-search" aria-hidden="true"></i>`;
  submitButton.classList.add("submitButton");
  submitButton.addEventListener("click", function () {
    searchHandler(title);
  });

  const iframeData = document.createElement("iframe");
  iframeData.setAttribute("id", `${title}-frame`);
  iframeData.classList.add("iframeData");

  inputForm.appendChild(inputElement);
  inputForm.appendChild(submitButton);
  tabContent.appendChild(inputForm);
  tabContent.appendChild(iframeData);

  const contentDiv = document.querySelector(".tab-content");
  contentDiv.appendChild(tabContent);
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => tab.classList.remove("active"));
  tab.classList.add("active");
  const tabsContent = document.querySelectorAll(".new-tab");
  tabsContent.forEach((tabCon) => (tabCon.style.display = "none"));
  const currentTab = document.querySelector(`#${title}-content`);
  currentTab.style.display = "flex";

  tab.addEventListener("click", function () {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    const tabsContent = document.querySelectorAll(".new-tab");
    console.log(tabContent);
    tabsContent.forEach((tabCon) => (tabCon.style.display = "none"));
    const currentTab = document.querySelector(`#${title}-content`);
    currentTab.style.display = "flex";
  });
  tabWrapper.appendChild(tab);
}

function searchHandler(title) {
  console.log(title);
  const inputUrl = document.querySelector(`#${title}-input`).value;
  const iframeContent = document.querySelector(`#${title}-frame`);
  iframeContent.setAttribute("src", inputUrl);
}

function checkForBanner() {
  const tabs = document.querySelectorAll(".tab");
  console.log(tabs);
  if (tabs.length > 0) {
    document.querySelector(".banner").style.display = "none";
  } else {
    document.querySelector(".banner").style.display = "block";
  }
}

window.onload = function () {
  checkForBanner();
  let count = 1;
  document.getElementById("add-tab-btn").addEventListener("click", function () {
    const parentTab = document.querySelector(".tabs");
    const totalTabs = parentTab.querySelectorAll(".new-tab");

    createTab(`Tab_${count++}`, "<p>New tab content</p>");
    checkForBanner();
  });
};
