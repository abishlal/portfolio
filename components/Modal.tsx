import React, { useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    imageAlt: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageUrl, imageAlt }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-navy bg-opacity-90 flex justify-center items-center z-50 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
        >
            <div
                className="relative bg-light-navy p-4 rounded-lg shadow-xl max-w-4xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 id="image-modal-title" className="sr-only">Project Screenshot: {imageAlt}</h2>
                <img src={imageUrl} alt={imageAlt} className="w-full h-full object-contain rounded-md max-h-[calc(90vh-2rem)]" />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-lightest-slate bg-light-navy/50 rounded-full p-1 hover:text-accent transition-colors duration-300"
                    aria-label="Close image viewer"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Modal;
