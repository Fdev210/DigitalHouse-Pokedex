import Header from './Header';

function App() {
  return (
    <>
      <header />
      <main class="main-legendaries">
        <h1>Legendaries</h1>
        <div class="legendarie-details">
                <img src="<%= legendary.image %>" alt="Mew Picture">
                <div>
                    <h2>  </h2>
                    <p> </p>
                    <div class="legendarie-stats">
                        <div>
                            <p>Health Points</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Attack</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Special Attack</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Experience</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Defense</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Special Defense</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
}

export default App;
