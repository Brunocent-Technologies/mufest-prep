// const options = [
//     `<h2>Responsive Sidebar Example</h2>
//     <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
//     <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
//     <h3>Resize the browser window to see the effect.</h3>
//     <button class="main-id">Home Page</button>`,
    
//     `
//     <h2>This is the Page for About Page</h2>
//     <p>We can do anything with Consistency and Practice and love for what you do. </p>
//     <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
//     <h3>Resize the browser window to see the effect.</h3>
//     <button class="main-id">About Page</button>
//     `,
//     `
//     <h2>This is the Page for Contact Page</h2>
//     <p>We can do anything with Consistency and Practice and love for what you do. </p>
//     <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
//     <h3>Resize the browser window to see the effect.</h3>
//     <button class="main-id">Contact Page</button>
//     `
// ];

const sidebarLinks = document.querySelectorAll('.side-btn');
const contentHolders = document.querySelectorAll('.content');

contentHolders.forEach((content)=>{
    content.style.display = 'none';
})


window.addEventListener("load", () =>{
    sidebarLinks.forEach((sidebtn, index) => {
        if (sidebtn.classList.contains('active')){
            contentHolders[index].style.display = 'block';
        }
    })
});

sidebarLinks.forEach((sidebtn, index) => {    


    sidebtn.addEventListener('click', () => {
        contentHolders.forEach((content) => {
            content.style.display = 'none';
        });
        sidebarLinks.forEach((sidebtn) => {
            sidebtn.classList.remove('active');
        });
        sidebtn.classList.add('active');
        contentHolders[index].style.display = 'block';
    });


});

