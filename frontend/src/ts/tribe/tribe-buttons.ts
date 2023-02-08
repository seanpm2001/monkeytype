import * as TribeState from "../tribe/tribe-state";
import tribeSocket from "./tribe-socket";

function showStartButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .startTestButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .startTestButton,
                .pageTest #tribeResultBottom .buttons .backToLobbyButton,
                .pageTest #result .bottom .buttons #nextTestButton,
                .pageTest #result .bottom .buttons #backToLobbyButton`;
  }
  $(elString).removeClass("hidden");
}

function hideStartButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .startTestButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .startTestButton,
                .pageTest #tribeResultBottom .buttons .backToLobbyButton,
                .pageTest #result .bottom .buttons #nextTestButton,
                .pageTest #result .bottom .buttons #backToLobbyButton`;
  }
  $(elString).addClass("hidden");
}

export function disableStartButton(page?: string): void {
  if (!page) {
    disableStartButton("lobby");
    disableStartButton("result");
    return;
  }
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .startTestButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .startTestButton,
                .pageTest #tribeResultBottom .buttons .backToLobbyButton,
                .pageTest #result .bottom .buttons #nextTestButton,
                .pageTest #result .bottom .buttons #backToLobbyButton`;
  }
  $(elString).addClass("disabled");
}

export function enableStartButton(page: string): void {
  if (!page) {
    enableStartButton("lobby");
    enableStartButton("result");
    return;
  }
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .startTestButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .startTestButton,
                .pageTest #tribeResultBottom .buttons .backToLobbyButton,
                .pageTest #result .bottom .buttons #nextTestButton,
                .pageTest #result .bottom .buttons #backToLobbyButton`;
  }
  $(elString).removeClass("disabled");
}

function showReadyButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userReadyButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .userReadyButton,
                .pageTest #result .bottom .buttons #readyButton`;
  }
  $(elString).removeClass("hidden");
}

function hideReadyButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userReadyButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .userReadyButton,
                .pageTest #result .bottom .buttons #readyButton`;
  }
  $(elString).addClass("hidden");
}

export function disableReadyButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userReadyButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .userReadyButton,
                .pageTest #result .bottom .buttons #readyButton`;
  }
  $(elString).addClass("disabled");
}

export function enableReadyButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userReadyButton";
  } else if (page === "result") {
    elString = `.pageTest #tribeResultBottom .buttons .userReadyButton,
                .pageTest #result .bottom .buttons #readyButton`;
  }
  $(elString).removeClass("disabled");
}

function showAfkButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userAfkButton";
  } else if (page === "result") {
    elString = ".pageTest #tribeResultBottom .buttons .userAfkButton";
  }
  $(elString).removeClass("hidden");
}

function hideAfkButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userAfkButton";
  } else if (page === "result") {
    elString = ".pageTest #tribeResultBottom .buttons .userAfkButton";
  }
  $(elString).addClass("hidden");
}

export function disableAfkButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userAfkButton";
  } else if (page === "result") {
    elString = ".pageTest #tribeResultBottom .buttons .userAfkButton";
  }
  $(elString).addClass("disabled");
}

export function enableAfkButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userAfkButton";
  } else if (page === "result") {
    elString = ".pageTest #tribeResultBottom .buttons .userAfkButton";
  }
  $(elString).removeClass("disabled");
}

export function deactivateAfkButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userAfkButton";
  } else if (page === "result") {
    elString = ".pageTest #tribeResultBottom .buttons .userAfkButton";
  }
  $(elString).removeClass("active");
}

export function activateAfkButton(page: string): void {
  let elString = "";
  if (page === "lobby") {
    elString = ".pageTribe .tribePage.lobby .lobbyButtons .userAfkButton";
  } else if (page === "result") {
    elString = ".pageTest #tribeResultBottom .buttons .userAfkButton";
  }
  $(elString).addClass("active");
}

export function reset(): void {
  $("#result .bottom .buttons div").addClass("hidden");
  $("#result #nextTestButton").removeClass("hidden");
  $("#result #restartTestButtonWithSameWordset").removeClass("hidden");
  $("#result #practiseWordsButton").removeClass("hidden");
  $("#result #watchReplayButton").removeClass("hidden");
  $("#result #showWordHistoryButton").removeClass("hidden");
  $("#result #saveScreenshotButton").removeClass("hidden");
}

export function update(page?: string): void {
  if (!page) {
    update("lobby");
    update("result");
    return;
  }
  const self = TribeState.getSelf();
  if (self?.isLeader) {
    showStartButton(page);
    hideReadyButton(page);
    hideAfkButton(page);

    disableStartButton(page);
    if (TribeState.getState() === 5 || TribeState.getState() === 22) {
      enableStartButton(page);
    }

    // TODO REENABLE
    // if (TribeState.get() === 5) {
    //   let readyCount = 0;
    //   Object.keys(TribeState.getRoom().users).forEach((userId) => {
    //     if (TribeState.getRoom().users[userId].isLeader || room.users[userId].isAfk) return;
    //     if (TribeState.getRoom().users[userId].isReady) {
    //       readyCount++;
    //     }
    //   });
    //   if (readyCount > 0) {
    //     enableStartButton();
    //   } else {
    //     disableStartButton();
    //   }
    // }
  } else {
    hideStartButton(page);
    showAfkButton(page);
    showReadyButton(page);
    deactivateAfkButton(page);
    enableReadyButton(page);
    enableAfkButton(page);
    if (self?.isAfk) {
      activateAfkButton(page);
      disableReadyButton(page);
    }
    if (self?.isReady) {
      disableAfkButton(page);
      disableReadyButton(page);
    }
  }
}

$(`.pageTribe .tribePage.lobby .lobbyButtons .userAfkButton,
  .pageTest #tribeResultBottom .buttons .userAfkButton`).on("click", (_e) => {
  const self = TribeState.getSelf();
  if (!self) return;
  tribeSocket.out.room.afkUpdate(!self.isAfk);
});

$(`.pageTribe .tribePage.lobby .lobbyButtons .leaveRoomButton,
.pageTest #tribeResultBottom .buttons .leaveRoomButton`).on("click", (_e) => {
  tribeSocket.out.room.leave();
});

$(`.pageTribe .tribePage.lobby .lobbyButtons .userReadyButton,
.pageTest #tribeResultBottom .buttons .userReadyButton`).on("click", (_e) => {
  tribeSocket.out.room.readyUpdate();
});

$(
  `.pageTest #result .bottom .buttons #backToLobbyButton, .pageTest #tribeResultBottom .buttons .backToLobbyButton`
).on("click", (_e) => {
  tribeSocket.out.room.backToLobby();
});