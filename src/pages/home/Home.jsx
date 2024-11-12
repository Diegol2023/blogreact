import "./../App.css"

const Home = () => {
    const styles = {
        titulo:{
            color:"red"
        }
    }
    return(
        <div>
            <h1 className="h1dehome" sytle={styles.titulo}>Home</h1>
            <h1 sytle={styles.titulo}>Home</h1>
        </div>
    )

}

export default Home