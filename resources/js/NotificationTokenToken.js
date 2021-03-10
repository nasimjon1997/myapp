/*
*-----------------------------------------------------
* NOTIFICATION SOUNDS
*-----------------------------------------------------
*/

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
        this.counter   = `${this.url}/${this.lang}/пройдите пожалуйста в кабинет.mp3`
        this.token     = `${this.url}/${this.lang}/Пациент номер.mp3`

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
        this.sounds.push(this.makeAudio(this.token))
      }

      const token = tokenObject.token.toString()
      this.sounds.push(this.makeAudio(`${this.url}/${this.lang}/${token.substr(0, 1).toLowerCase()}.mp3`))
      this.sounds.push(this.makeAudio(`${this.url}/${this.lang}/${token.substr(1)}.mp3`))


      if (this.callCounter) {
        this.sounds.push(this.makeAudio(this.counter))
        const counter = tokenObject.counter.toString()
        this.sounds.push(this.makeAudio(`${this.url}/${this.lang}/${counter.toLowerCase()}.mp3`))
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

export default NotificationTokenToken
