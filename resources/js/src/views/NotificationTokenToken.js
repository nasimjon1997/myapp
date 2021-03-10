/*
*-----------------------------------------------------
* NOTIFICATION SOUNDS
*-----------------------------------------------------
*/
// eslint-disable-next-line no-unused-vars
class NotificationTokenToken {
    url      = '';
    lang     = 'en';
    start    = '';
    counter  = '';
    token    = '';
    sounds   = [];
    callCounter   = true;
    callToken     = true;
    static status = true;

    // call with multiple object
    call (objects = [], lang = null, url = null, callCounter = true, callToken = true) {
alert(1);
      if (NotificationTokenToken.status === true) {
        // reset url
          // eslint-disable-next-line eqeqeq
        if (url != null || url !== '') {
          this.url = url
        }
        if (lang != null || lang != '') {
          this.lang = lang
        }
        if (callCounter != null || callCounter != '') {
          this.callCounter = callCounter
        }
        this.url       = `${this.url}/sounds/`
        this.start     = `${this.url}/start.mp3`
        this.counter   = `${this.url}/${this.lang}/counter.mp3`
        this.token     = `${this.url}/${this.lang}/token.mp3`

        // make audio and play
        if ((objects.length > 0)) {
          objects.map(function (item) {
            this.processAudio(item)
          }, this)

          this.player()
        }

      }
    }

    processAudio (tokenObject) {
      this.sounds.push(this.makeAudio(this.start))

      if (this.callCounter) {
        this.sounds.push(this.makeAudio(this.counter))
        var i = 0
        const counter = tokenObject.counter.toString()
        while (i < counter.length) {
          var char = counter.charAt(i).toLowerCase()
          this.sounds.push(this.makeAudio(`${this.url}/${this.lang}/char/${char}.mp3`))
          i++
        }
      }

      if (this.callCounter) {
        this.sounds.push(this.makeAudio(this.token))
      }

      const token = tokenObject.token.toString()
      var i = 0
      while (i < token.length) {
        var char = token.charAt(i).toLowerCase()
        this.sounds.push(this.makeAudio(`${this.url}/${this.lang}/char/${char}.mp3`))
        i++
      }
    }

    makeAudio (filePath) {
      const audio = new Audio(filePath.replace(/([^:]\/)\/+/g, '$1'))
      audio.crossOrigin = 'anonymous'
      return audio
    }

    // take a object and convert to audio
    async player () {
      NotificationTokenToken.status = false
      for (let i = 0; i < (this.sounds).length; i++) {
        const item = this.sounds[i]
        await new Promise((resolve) => {
          item.onended = resolve
          item.play()
        })
      }
      NotificationTokenToken.status = true
    }
}
