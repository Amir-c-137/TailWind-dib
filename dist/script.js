var sideMenu = document.getElementById('side-menu');
function openMenu() {
    sideMenu.classList.remove('left-[-250px]');
    sideMenu.classList.add('left-0');
}

function closeMenu() {
    sideMenu.classList.remove('left-0');
    sideMenu.classList.add('left-[-250px]');
}

function showContent(contentId) {
    // Hide all content divs
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => content.classList.add('hidden'));

    // Show the selected content
    const selectedContent = document.getElementById(`${contentId}Content`);
    if (selectedContent) {
      selectedContent.classList.remove('hidden');
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