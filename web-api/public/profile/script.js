// document.addEventListener('DOMContentLoaded', async () => {
//   const profileCard = document.getElementById('profileCard');
//   const loading = document.getElementById('loading');
//   const error = document.getElementById('error');

//   const profileName = document.getElementById('profileName');
//   const profileGender = document.getElementById('profileGender');
//   const profileImage = document.getElementById('profileImage');

//   try {
//     // Fetch profile data from the API
//     const response = await fetch('/profile'); // Replace with actual API URL if different
//     if (!response.ok) throw new Error('Failed to fetch profile data');

//     const profile = await response.json();

//     // Populate the profile card with the data
//     profileName.textContent = profile.name;
//     profileGender.textContent = `Gender: ${profile.gender}`;
//     profileImage.src = profile.image;

//     // Display the profile card and hide loading
//     loading.classList.add('hidden');
//     profileCard.classList.remove('hidden');
//   } catch (err) {
//     console.error(err.message);

//     // Show error message
//     loading.classList.add('hidden');
//     error.classList.remove('hidden');
//   }
// });