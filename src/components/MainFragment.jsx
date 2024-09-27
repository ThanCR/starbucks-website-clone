import './MainFragment.css';


function MainFragment({Url, reverse=false, buttonText = ''}) {
    const imageStyle = {
        'width': '720px',
        'height': '625px'
      }
    return (
        <div className="MainFragment">
            <img src={Url} alt="MainFragment content" style={imageStyle}/>
            <div className={`fragment-info ${reverse ? 'reversed' : '' }`}>
                <h2>Gift a Coffee Day hooray</h2>
                <p>Celebrate National Coffee Day on September 29 by sending a brew-loving friend a Starbucks eGift.</p>
                <button className='fragment-button'>{buttonText}</button>
            </div>
        </div>
    );
}

export default MainFragment;
