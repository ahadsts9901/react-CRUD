import "./post.css";

const Post = (props) => {
    <div class=" post" id="">
        <p class=" regards center" style="font-size: 0.7em;">3 minutes ago</p>
        <h2 class=" scrollH">{props.title}</h2>
        <p class=" scroll">{props.text}</p>
        <div class=" space-around">
            <p class=" regards">Regards! Muhammad Ahad</p><i class=" regards bi bi-pencil-fill">
            </i><i class=" regards bi bi-trash-fill"></i>
        </div>
        {console.log("Chal gaya")}
    </div>
};

const NoPost = () => {
    <h2 class="noPostsMessage">No post found...</h2>
};

export { Post, NoPost };