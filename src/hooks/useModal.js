import { useState } from "react";

export function useModal(defaultModalOpen = false) {
  const [modalOpen, setModalOpen] = useState(defaultModalOpen);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }
  return [modalOpen, openModal, closeModal];
}
