class AppBar extends HTMLElement {


    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `

        <nav class="navbar navbar-light bg-dark justify-content-between">
            <div class="container">
                <a class="navbar-brand text-light">Pantau Covid</a>
                <div>
                    <a  class="mr-3 text-light">Article</a>
                    <a  class="mr-3 text-light">About</a>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);