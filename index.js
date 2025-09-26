//product rating
const rating = document.getElementById('star-rating');
const star = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M23.3631 9.08405L15.9851 7.95705L12.6781 0.913055C12.4311 0.387055 11.5681 0.387055 11.3211 0.913055L8.0151 7.95705L0.637095 9.08405C0.500872 9.10498 0.373049 9.16304 0.267662 9.25185C0.162274 9.34067 0.0833962 9.45681 0.0396894 9.58751C-0.0040174 9.71822 -0.0108633 9.85844 0.0199035 9.99279C0.0506702 10.1271 0.11786 10.2504 0.214095 10.3491L5.5741 15.8431L4.3071 23.6101C4.28447 23.749 4.30139 23.8914 4.35591 24.0212C4.41043 24.1509 4.50036 24.2627 4.61542 24.3438C4.73047 24.4248 4.86601 24.4719 5.00654 24.4795C5.14707 24.4872 5.28692 24.4551 5.4101 24.3871L12.0001 20.7451L18.5901 24.3881C18.7133 24.4561 18.8531 24.4882 18.9937 24.4805C19.1342 24.4729 19.2697 24.4258 19.3848 24.3448C19.4998 24.2637 19.5898 24.1519 19.6443 24.0222C19.6988 23.8924 19.7157 23.75 19.6931 23.6111L18.4261 15.8441L23.7861 10.3501C23.8826 10.2514 23.9501 10.1281 23.981 9.9936C24.0119 9.85911 24.0051 9.7187 23.9614 9.58781C23.9177 9.45693 23.8387 9.34064 23.7331 9.25176C23.6276 9.16288 23.4995 9.10485 23.3631 9.08405Z" fill="#FFC107"/>
</svg>`;

// Create and append 5 star elements
for (let i = 0; i < 5; i++) {
    const starElement = document.createElement('span');
    starElement.className = 'star';
    starElement.innerHTML = star;
    rating.appendChild(starElement);
}
//product benefits
const productBenefits = document.querySelector('.product-benefits > ul');
const listStyle=`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <g clip-path="url(#clip0_15309_1496)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.63793 2.14859C7.80649 0.55073 10.1919 0.55073 11.3604 2.14859C11.4919 2.32849 11.6704 2.46876 11.8763 2.55407C12.0821 2.63937 12.3075 2.66642 12.5277 2.63225C14.4841 2.32859 16.1707 4.01519 15.8671 5.97161C15.8329 6.19181 15.8599 6.41716 15.9452 6.62304C16.0304 6.82891 16.1707 7.00737 16.3506 7.13891C17.9488 8.30747 17.9488 10.6928 16.3506 11.8614C16.1707 11.9929 16.0304 12.1714 15.9452 12.3773C15.8599 12.5831 15.8329 12.8085 15.8671 13.0287C16.1707 14.9851 14.4841 16.6717 12.5277 16.3681C12.3075 16.3339 12.0822 16.3609 11.8763 16.4462C11.6704 16.5314 11.492 16.6717 11.3604 16.8515C10.1919 18.4498 7.80649 18.4498 6.63793 16.8515C6.5064 16.6717 6.32793 16.5314 6.12206 16.4462C5.91619 16.3609 5.69083 16.3339 5.47063 16.3681C3.51421 16.6717 1.82743 14.9851 2.13127 13.0287C2.16544 12.8085 2.13839 12.5831 2.05309 12.3772C1.96779 12.1714 1.82752 11.9929 1.64761 11.8614C0.0497538 10.6928 0.0497538 8.30747 1.64761 7.13891C1.8275 7.00738 1.96776 6.82892 2.05306 6.62305C2.13836 6.41718 2.16542 6.19182 2.13127 5.97161C1.82761 4.01519 3.51421 2.32841 5.47063 2.63225C5.69085 2.6664 5.91621 2.63934 6.12208 2.55404C6.32795 2.46874 6.5064 2.32848 6.63793 2.14859ZM12.8422 7.72013C12.9954 7.55297 13.076 7.33179 13.0661 7.10523C13.0563 6.87867 12.9569 6.6653 12.7897 6.51206C12.6225 6.35882 12.4014 6.27826 12.1748 6.2881C11.9482 6.29794 11.7349 6.39737 11.5816 6.56453L8.37709 10.0016L7.44649 9.18263C7.27899 9.03225 7.05895 8.954 6.83411 8.96484C6.60928 8.97569 6.39779 9.07476 6.24554 9.24056C6.09329 9.40636 6.01257 9.62552 6.0209 9.85046C6.02922 10.0754 6.12591 10.288 6.28999 10.4421L7.85077 11.84C7.93352 11.916 8.03044 11.9749 8.13598 12.0134C8.24152 12.052 8.35362 12.0693 8.46587 12.0645C8.57811 12.0597 8.68831 12.0328 8.79017 11.9854C8.89202 11.938 8.98353 11.8709 9.05947 11.7881L12.8422 7.72013Z" fill="#FF6600"/>
  </g>
  <defs>
    <clipPath id="clip0_15309_1496">
      <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
</svg>`
const benefits = [
    "Enhances skin's natural glow",
    "Stop snoring",
    'Optimized Airflow',
    '100% Drug Free',
];

benefits.forEach(benefit => {
    const li = document.createElement('li');
    li.innerHTML = `${listStyle} ${benefit}`;
    productBenefits.appendChild(li)
});
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const content = header.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Product Image Gallery Functionality
const mainProductImage = document.getElementById('product-active');
const thumbnailImages = document.querySelectorAll('.product-list img');

// Add click event listeners to all thumbnail images
thumbnailImages.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Update the main product image source
        mainProductImage.src = thumbnail.src;
        
        // Remove active class from all thumbnails
        thumbnailImages.forEach(img => {
            img.removeAttribute('id');
        });
        
        // Add active id to the clicked thumbnail
        thumbnail.id = 'products-active';
    });
});
