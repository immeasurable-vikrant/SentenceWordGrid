import React from 'react';

class WordGrid extends React.Component {
    state = {
        Sentence :'Winter Is Not At All Coming',
        Answers : [],
        Options :[], 

    
    };

    componentDidMount = () => {
        let sentenceArr = this.state.Sentence; // Assigning sentenceArr a String Value using State
        let convArr= sentenceArr.split(" "); // converting String Value into an array elements.
            this.setState ( () => {
                return {
                    Options: convArr.sort(() => Math.random() - Math.random()) //converting array elemnts to randomize and assign it to OPTION ARRAY
                };
            })
    }

onClickOptionGrid = (e) => {

    let OptionsArray = [...this.state.Options];
    let index = OptionsArray.indexOf(e.target.value)
        if (index !== -1) {
        OptionsArray.splice(index, 1);

    this.setState({
        Options: OptionsArray});
    }

    this.setState({
    Answers: [...this.state.Answers, e.target.value]
  })

   
}
    render() {
        
        let sentenceArr = this.state.Sentence;
        let convArr= sentenceArr.split(" ");
        let mainArr= sentenceArr.split(" ");
        convArr.sort(() => Math.random() - Math.random() );
        let ans =this.state.Answers;
        let flag=true;
        
        if(ans.length!==mainArr.length){
            flag=false;
        }
        else {
            for(var i=0;i<ans.length;i++){
                if(mainArr[i]!==ans[i]){
                flag=false;
                break;
                }
            }
        }

        return(
            <div className="grid-container">
                <div className="grid-item"> 
                    <h2>Pick the Words in Order</h2>
                </div>
                <div className="grid-item"> 
                    <h2>{this.state.Sentence}</h2>
                </div>
                <div className="grid-item">
                    {  
                    this.state.Answers.map((answer) => {  
                            return (
                                <div key={answer} className="btn-div" >
                                    <button className="doom">
                                    {answer}
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="grid-item">
                    {
                        flag===false?
                        this.state.Options.map((conv) => {
                            return (
                                <div key={conv} className="btn-div" >
                                    <input type="button" className="doom" onClick={this.onClickOptionGrid} value={conv}/>  
                                </div>
                            );   
                        }): <button className="btn-correct">Correct</button>   
                    }
                </div>
            </div>
        );
    }
}
export default WordGrid;

