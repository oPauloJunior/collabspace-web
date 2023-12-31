import { useEffect, ReactNode } from "react";
import { Container, Content } from "./styles";
import { X } from "phosphor-react";

interface ModalProps {
  isOpen: boolean;
  onClose(): void;
  width?: string;
  height?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  width = "32rem",
  height,
  children,
}) => {
  const id = "modal";

  function handleOutsideClick(e: any) {
    if (e.target.id === id) onClose();
  }

  useEffect(() => {
    function handleTypedKey(event: KeyboardEvent) {
      if (event.key === "Escape") if (isOpen) onClose();
    }
    document.addEventListener("keydown", handleTypedKey);

    return () => {
      document.addEventListener("keydown", handleTypedKey);
    };
  }, [onClose, isOpen]);

  return (
    isOpen && (
      <Container id={id} onClick={handleOutsideClick}>
        <Content $width={width} $height={height}>
          <X size={20} weight="bold" onClick={onClose} />
          {children}
        </Content>
      </Container>
    )
  );
};

export default Modal;
