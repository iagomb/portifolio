let url = fetch('https://api.github.com/users/iagomb') 

async function avatar() {
    try {
        const users = await url
        const avatar = await users.json()
        const imageGithub = await avatar.avatar_url
        let image = document.querySelector('.profile img')
        let imageFigure = document.querySelector('figure img')
        image.src = imageGithub
        imageFigure.src = imageGithub
    } catch (err) {
        console.error(err);
    }
}
avatar()

const closeButton = document.querySelector('#close')
const openButton = document.querySelector('#open')
const modal = document.querySelector('#header')

openButton.onclick = () => modal.classList.add('modal')
closeButton.onclick = () => modal.classList.remove('modal')