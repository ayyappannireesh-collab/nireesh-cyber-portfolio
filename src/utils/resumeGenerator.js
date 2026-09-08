export function generateResumePDF() {
  // Direct file download of the actual DOCX resume placed in public folder
  const link = document.createElement('a');
  link.href = '/Nireesh_Resume.docx';
  link.download = 'Nireesh_Resume.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
