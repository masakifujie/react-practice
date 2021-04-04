import React from 'react';
import Article from './Article';

const Blog = () => {
        
    // componentDidMount() {
    //     //ボタンがクリックされたらいいねをカウントアップする
        
    // }

    // componentDidUpdate() {
    //     if (this.state.count >= 10) {
    //         this.setState({count: 0 })
    //     }
    // }

    // componentWillUnmount() {
    //     document.getElementById('counter').removeEventListener('click',this.countUp)
    // }

    // 公開状態を反転させる
   


    
        return (
            <>
                <Article
                    tittle={"Reactの使い方"}
                    // count={this.state.count}
                />
            </>
        )
}

export default Blog
