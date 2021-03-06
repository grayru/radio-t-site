import Controller from '../base_controller';
import Player from './player_controller';

export default class extends Controller {
  static targets = [
    'player',
    'playerStateReceiver',
  ];

  initialize() {
    super.initialize();
  }

  updatePodcasts(e) {
    this.playerStateReceiverTargets.forEach((podcast) => {
      this.dispatchEvent(podcast, new CustomEvent('player-state', {bubbles: false}))
    });
  }

  playPodcast({detail}) {
    this.getPlayerController().playPodcast(detail);
  }

  /**
   * @return {Player}
   */
  getPlayerController() {
    return this.application.getControllerForElementAndIdentifier(this.playerTarget, 'player');
  }
}
