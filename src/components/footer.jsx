import React from 'react'
import "../css/footer.sass"


function Footer() {

    const now = new Date()
    const year = now.getFullYear()

    return (
        <div>
            <footer>

                <div>           By Yash Tripathi</div>
                <br />
                <div>{year}</div>
                <br />
                <div>@Github<a href="https://github.com/DrKakku">DrKakku</a></div>
            </footer>
        </div>
    )
}

export default Footer