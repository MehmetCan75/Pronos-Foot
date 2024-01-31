import React, {Component} from 'react'
import Instance from './Instance'
import ResultDisplay from './ResultDisplay'
import '../Pronos/Pronos.css'

class ResultFetch extends Component {


    state={
        results: []
    }

    componentDidMount(){
        Instance.get('/result.json')
        .then (response =>{
            console.log(response.data)
            const fetchedResults = [];
            for(let key in response.data){
                fetchedResults.push(
                    {
                        ...response.data[key],
                        id: key
                    }
                )
            }
            this.setState({results: fetchedResults})
        })
    }

    render(){
  return (
    <div className="showMerci">
         <h2>Résultats des joueurs précédents</h2>
      {this.state.results.map(result => { 
          return(
          <ResultDisplay
          key={result.id}
          name={result.name}
          afirstGame={result.afirstGame}
          bsecondGame={result.bsecondGame}
          cthirdGame={result.cthirdGame}
          dfourthGame={result.dfourthGame}
          efifthGame={result.efifthGame}
          fsixthGame={result.fsixthGame}
          gseventhGame={result.gseventhGame}
          heigthGame={result.heigthGame}
          ininethGame={result.ininethGame}
          jtenthGame={result.jtenthGame}
           />)
      })}
    </div>
  )
}
}

export default ResultFetch;
