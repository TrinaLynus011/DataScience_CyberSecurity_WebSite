Division of Data Science & Cyber Security Website

This repository contains the static website for the Division of Data Science and Cyber Security.
It includes pages for programs, workshops, student awards, rankings, projects, placements, library resources, and an overview of the department.

📂 Project Structure
├── index.html         # Main overview / landing page
├── homee.html         # Alternative home/overview page
├── programs.html      # Academic programs offered
├── projects.html      # Research & student projects
├── workshop.html      # Workshops & events
├── stu_award.html     # Student awards & achievements
├── rank.html          # Rankings & recognitions
├── placement.html     # Placement information
├── library.html       # Library & facilities

🎨 Features

Responsive Navigation Bar with dropdowns (no underline styling).

Image Slider & Gallery on homepage (homee.html).

Admission Popup & Floating Buttons for quick access.

Dedicated Pages for programs, workshops, student achievements, placements, and facilities.

Consistent Styling using custom CSS variables with a blue, gold, and red theme.

Mobile-Friendly Layout with collapsible menus.

🚀 How to Run

Clone or download the repository.

Open index.html (or homee.html) in any modern web browser.

Navigate through the site using the top navigation bar.

🛠️ Customization

To remove underlines from nav links, CSS already includes:

.nav-links a,
.nav-links a:hover,
.dropdown > a,
.dropdown > a:hover,
.dropdown-content a,
.dropdown-content a:hover {
    text-decoration: none;
}


To update colors or branding, edit the :root variables inside each HTML file.

📌 Future Enhancements

Centralize CSS into a single stylesheet instead of inline <style> blocks.

Add JavaScript interactivity for smoother dropdowns and sliders.

Optimize images for faster load times.