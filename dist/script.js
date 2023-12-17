document.addEventListener('DOMContentLoaded', function () {
  // This code runs when the DOM is fully loaded

  // Add the blue underline to the "about us" menu item by default
  const defaultMenuItem = document.querySelector('#menu a[onclick="showContent(\'about\')"]');
  if (defaultMenuItem) {
    defaultMenuItem.classList.add('border-b-2', 'border-blue-500');
  }
});

function showContent(contentId) {
  // Scroll to the selected content
  const selectedContent = document.getElementById(`${contentId}Content`);
  if (selectedContent) {
    selectedContent.scrollIntoView({ behavior: 'smooth' });
  }

  // Remove the blue border from all menu items
  const allMenuItems = document.querySelectorAll('#menu a');
  allMenuItems.forEach(item => item.classList.remove('border-b-2', 'border-blue-500'));

  // Add the blue border to the selected menu item
  const selectedMenuItem = document.querySelector(`#menu a[href="#"][onclick="showContent('${contentId}')"]`);
  if (selectedMenuItem) {
    selectedMenuItem.classList.add('border-b-2', 'border-blue-500');
  }
}

function openMenu() {
  const sideMenu = document.getElementById('side-menu');
  sideMenu.style.left = '0';
}

function closeMenu() {
  const sideMenu = document.getElementById('side-menu');
  sideMenu.style.left = '-250px';
}
