// Similar to bitcoin.js file

import { withScreenSize } from '@vx/responsive';
import Background from '../components/background';
import BitcoinPrice from '../components/bitcoinprice';

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  //https://hl7.org/fhir/2017Jan/observation-example-heart-rate.json
  componentDidMount() {
    fetch('https://hl7.org/fhir/2017Jan/observation-example-heart-rate.json')
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          data: json
        });
      });
  }
  render() {
    const { screenWidth, screenHeight } = this.props;
    const { data } = this.state;
    return (
      <div className="app">
        <Background width={screenWidth} height={screenHeight} />
        <div className="center">
          {/* CHANGE LINE BELOW */}
          <BitcoinPrice data={data} width={screenWidth} height={screenHeight} />
          <p className="identity">
            CHANGE LINE BELOW
            {/* {data.disclaimer} */}
            {data.id}
          </p>
        </div>
        <style jsx>{`
          .app,
          .center {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            display: flex;
            font-family: arial;
            flex-direction: column;
          }

          .identity {
            margin-top: 35px;
            font-size: 11px;
            color: white;
            opacity: 0.4;
          }
          .center {
            align-items: center;
            justify-content: center;
          }
        `}</style>
      </div>
    );
  }
}

export default withScreenSize(App);