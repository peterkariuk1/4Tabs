const firstTabElement = document.querySelector('.first-tab');
const secondTabElement = document.querySelector('.second-tab');
const thirdTabElement = document.querySelector('.third-tab');
const fourthTabElement = document.querySelector('.fourth-tab');

const tabContentElement = document.querySelector('.tab-content-text');

firstTabElement.addEventListener('click', () => {
    firstTabElement.classList.add('first-tab');
    secondTabElement.classList.remove('active');
    thirdTabElement.classList.remove('active');
    fourthTabElement.classList.remove('active');
    tabContentElement.innerText = `This is the first tab's content.`

});
secondTabElement.addEventListener('click', () => {
    secondTabElement.classList.add('active');
    firstTabElement.classList.remove('first-tab');
    thirdTabElement.classList.remove('active');
    fourthTabElement.classList.remove('active');
    tabContentElement.innerText = `This is the second tab's content.`
});
thirdTabElement.addEventListener('click', () => {
    thirdTabElement.classList.add('active');
    firstTabElement.classList.remove('first-tab');
    secondTabElement.classList.remove('active');
    fourthTabElement.classList.remove('active');
    tabContentElement.innerText = `This is the third tab's content.`
});
fourthTabElement.addEventListener('click', () => {
    fourthTabElement.classList.add('active');
    firstTabElement.classList.remove('first-tab'); 
    secondTabElement.classList.remove('active');
    thirdTabElement.classList.remove('active');
    tabContentElement.innerText = `This is the fourth tab's content.`

});