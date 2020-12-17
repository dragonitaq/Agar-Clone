# note

Robert setup this project architecture that separate express & socketio because they are 2 different stuff. This setup is specific when using socketio with express only. We created server.js as the main purpose of creating express server and have socketio listen to that server. But from there onwards, any code logic stuff related to express & socketio will go into their separated folders.

---

<!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
