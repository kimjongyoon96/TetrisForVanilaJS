class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal.querySelector(".close");
    this.init();
  }

  init() {
    // 모달의 닫기 버튼에 이벤트 리스너 추가
    this.closeButton.onclick = () => this.hide();
    // 모달 외부 클릭 시 모달 숨기기
    window.onclick = (event) => {
      if (event.target == this.modal) {
        this.hide();
      }
    };
  }

  show() {
    this.modal.style.display = "block";
  }

  hide() {
    this.modal.style.display = "none";
  }
}

export default modal;
