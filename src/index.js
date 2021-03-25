const editBtn = document.querySelector(".edit")

editBtn.onclick = function () {
  if (document.designMode === "off") {
    document.designMode = "on"
    this.className = "btn2 onEdit"
    this.innerText = "退出编辑"
  } else {
    document.designMode = "off"
    this.className = "btn2 edit"
    this.innerText = "编辑"
  }

}