function saveChanges() {
  const backgroundInput = document.getElementById('upload-background').files[0];
  const projectInput = document.getElementById('upload-project').files[0];
  
  if (backgroundInput) {
    console.log("Background image selected:", backgroundInput.name);
    // هنضيف هنا كود لحفظ الصورة المرفوعة
  }

  if (projectInput) {
    console.log("Project image selected:", projectInput.name);
    // هنضيف هنا كود لحفظ صورة المشروع المرفوعة
  }
}
