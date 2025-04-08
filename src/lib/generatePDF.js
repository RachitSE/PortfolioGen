import html2pdf from 'html2pdf.js';

export const generatePDF = (elementId = 'portfolio-preview') => {
  const element = document.getElementById(elementId);

  if (!element) {
    console.error('PDF element not found');
    return;
  }

  const opt = {
    margin: 0.5,
    filename: 'My_Portfolio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
  };

  html2pdf().set(opt).from(element).save();
};
