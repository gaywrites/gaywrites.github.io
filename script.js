 // Store SVG icons as strings
 const svgIcons = [
    `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 83.3333H87.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M68.2333 15.0917C69.892 13.433 72.1417 12.5011 74.4875 12.5011C76.8333 12.5011 79.083 13.433 80.7417 15.0917C82.4004 16.7504 83.3322 19.0001 83.3322 21.3458C83.3322 23.6916 82.4004 25.9413 80.7417 27.6L30.7 77.6458C29.7087 78.6371 28.4834 79.3622 27.1375 79.7542L15.1708 83.2458C14.8123 83.3504 14.4322 83.3567 14.0705 83.264C13.7087 83.1713 13.3784 82.9831 13.1144 82.719C12.8503 82.4549 12.662 82.1247 12.5693 81.7629C12.4767 81.4011 12.4829 81.021 12.5875 80.6625L16.0792 68.6958C16.4718 67.3514 17.1969 66.1276 18.1875 65.1375L68.2333 15.0917Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    
    `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M41.6667 54.1667H58.3333" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M50 25V54.1667" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M66.6667 33.3333V25L33.3333 25V33.3333" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.6667 81.25L16.6667 18.75C16.6667 15.9873 17.7641 13.3378 19.7176 11.3843C21.6711 9.4308 24.3207 8.33333 27.0833 8.33333L79.1667 8.33333C80.2717 8.33333 81.3315 8.77232 82.113 9.55372C82.8944 10.3351 83.3333 11.3949 83.3333 12.5V87.5C83.3333 88.6051 82.8944 89.6649 82.113 90.4463C81.3315 91.2277 80.2717 91.6667 79.1667 91.6667H27.0833C24.3207 91.6667 21.6711 90.5692 19.7176 88.6157C17.7641 86.6622 16.6667 84.0127 16.6667 81.25ZM16.6667 81.25C16.6667 78.4873 17.7641 75.8378 19.7176 73.8843C21.6711 71.9308 24.3207 70.8333 27.0833 70.8333H83.3333" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    
    `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.5 70.8333L78.5167 63.05C78.2198 62.7685 77.8465 62.5806 77.4435 62.5099C77.0405 62.4391 76.6256 62.4886 76.2506 62.6521C75.8755 62.8156 75.5569 63.086 75.3345 63.4294C75.1121 63.7729 74.9958 64.1742 75 64.5833V66.6667C75 67.7717 74.561 68.8315 73.7796 69.6129C72.9982 70.3944 71.9384 70.8333 70.8333 70.8333H62.5C61.3949 70.8333 60.3351 70.3944 59.5537 69.6129C58.7723 68.8315 58.3333 67.7717 58.3333 66.6667C58.3333 56.0625 41.7042 50.125 22.9167 50C20.154 50 17.5045 51.0975 15.551 53.051C13.5975 55.0045 12.5 57.654 12.5 60.4167C12.5 63.1793 13.5975 65.8289 15.551 67.7824C17.5045 69.7359 20.154 70.8333 22.9167 70.8333C40.2208 70.8333 42.6875 23.7708 46.7 14.5833C47.3778 13.0325 48.4233 11.6701 49.7461 10.6142C51.0688 9.55828 52.6289 8.84057 54.2914 8.52316C55.9539 8.20576 57.6687 8.29824 59.2874 8.79259C60.9061 9.28695 62.3799 10.1683 63.5814 11.3603C64.7829 12.5524 65.6759 14.0193 66.183 15.634C66.6901 17.2488 66.7961 18.9628 66.4918 20.6277C66.1875 22.2927 65.4821 23.8584 64.4366 25.1894C63.3912 26.5204 62.0371 27.5766 60.4917 28.2667" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 87.5H87.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    
    `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M55.8333 8.33333L25 8.33333C22.7899 8.33333 20.6702 9.2113 19.1074 10.7741C17.5446 12.3369 16.6667 14.4565 16.6667 16.6667L16.6667 83.3333C16.6667 85.5435 17.5446 87.6631 19.1074 89.2259C20.6702 90.7887 22.7899 91.6667 25 91.6667H75C77.2101 91.6667 79.3297 90.7887 80.8926 89.2259C82.4554 87.6631 83.3333 85.5435 83.3333 83.3333V52.5" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33333 25H25" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33333 41.6667H25" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33333 58.3333H25" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.33333 75H25" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M89.075 23.4417C90.7348 21.7819 91.6673 19.5307 91.6673 17.1833C91.6673 14.836 90.7348 12.5848 89.075 10.925C87.4152 9.26519 85.164 8.33272 82.8167 8.33272C80.4693 8.33272 78.2182 9.26519 76.5583 10.925L55.6833 31.8083C54.6927 32.7984 53.9676 34.0222 53.575 35.3667L50.0875 47.325C49.9829 47.6835 49.9767 48.0636 50.0694 48.4254C50.162 48.7872 50.3503 49.1174 50.6144 49.3815C50.8784 49.6456 51.2087 49.8338 51.5705 49.9265C51.9322 50.0192 52.3123 50.0129 52.6708 49.9083L64.6292 46.4208C65.9736 46.0283 67.1974 45.3031 68.1875 44.3125L89.075 23.4417Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  ];

  // Configuration
  const minIcons = 10; // Minimum number of icons
  const maxIcons = 20; // Maximum number of icons
  const animationDuration = 12; // Animation duration in seconds
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;
  
  // Get background container
  const backgroundContainer = document.getElementById('background');
  
  // Generate a random number of icons for each type
  const totalIcons = Math.floor(Math.random() * (maxIcons - minIcons + 1)) + minIcons;
  
  // Function to create and animate an icon
  function createIcon() {
    // Create container for SVG
    const iconContainer = document.createElement('div');
    iconContainer.className = 'svg-icon';
    
    // Select random SVG
    const randomSvgIndex = Math.floor(Math.random() * svgIcons.length);
    
    // Set random vertical position
    const randomTop = Math.floor(Math.random() * (containerHeight - 100));
    iconContainer.style.top = `${randomTop}px`;
    
    // Set random animation duration variation (10-14 seconds)
    const durationVariation = 10 + Math.random() * 4;
    iconContainer.style.animationDuration = `${durationVariation}s`;
    
    // Insert SVG
    iconContainer.innerHTML = svgIcons[randomSvgIndex];
    
    // Add to background
    backgroundContainer.appendChild(iconContainer);
    
    // Remove the icon after animation completes
    setTimeout(() => {
      iconContainer.remove();
    }, durationVariation * 1000);
  }
  
  // Initial icon creation
  for (let i = 0; i < totalIcons; i++) {
    // Stagger the initial creation
    setTimeout(() => {
      createIcon();
    }, i * (animationDuration * 1000 / totalIcons / 2));
  }
  
  // Continuously create new icons
  setInterval(() => {
    createIcon();
  }, 2000); // Create a new icon every 2 seconds

