const gameList = document.getElementById("game-drop");

    fetch('game.json')
      .then(response => response.json())
      .then(games => {
        // Clear existing content
        gameList.innerHTML = "";

        // Iterate through the fetched games and create game items
        for (const game of games) {
          gameList.innerHTML += `
            <div class="col-lg-3 col-sm-6">
              <div class="item">
                <div class="thumb">
                  <img src="${game.image}" alt="">
                  <div class="hover-effect">
                    <div class="content">
                      <div class="live">
                        <a href="#">Live</a>
                      </div>
                      <ul>
                        <li><a href="#"><i class="fa fa-eye"></i> 1.2K</a></li>
                        <li><a href="#"><i class="fa fa-gamepad"></i> ${game.name}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="down-content">
                  <div class="avatar">
                    <img src="${game.ava}" alt="" style="max-width: 46px; border-radius: 50%; float: left;">
                  </div>
                  <span><i class="fa fa-check"></i> ${game.name}</span>
                  <h4>Playing</h4>
                </div> 
              </div>
            </div>`;
        }
      })
      .catch(error => {
        console.error('Error fetching JSON:', error);
});
