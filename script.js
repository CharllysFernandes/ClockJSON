const tableBodyProgress = document.getElementById('tableBodyProgress');
const exampleTableEmpty =
  `
<tr>
  <th scope="row">
    <input class="bg-transparent text-white border-0 rounded-0 w-100" type="number">
  </th>
  <td colspan="2"><input class="bg-transparent text-white border-0 rounded-0" type="text"></td>
  <td><a href="#">Share</a></td>
</tr>
`

function baixarArquivoLocal(name, dados) {
  console.log(dados)
  let link = document.createElement('a');
  link.href = 'data:application/octet-stream;charset=utf-8,' + JSON.stringify(dados, null, 2);
  link.download = name;
  link.click();
}


buttonNotDB.addEventListener("click", function () {
  console.log("not database create one...")
  notShow("sectionOne");

  createLog();

  // create Json File
  document.getElementById("createJsonFile").addEventListener("click", function () {
    // create body of json
    let msgDate = document.getElementById("date").value;
    let log = document.getElementById("logMessge").value.replaceAll(" ", "_");
    const id = 1;
    const firstDay = [{ id, log, msgDate }];
    console.log(firstDay)
    baixarArquivoLocal('100DaysOfCode.json', firstDay)

    // Show Off Clock
    // active clock
    showClock();


    // Show button initial now

    showButton("Começar Agora", "initial");

    document.getElementById("initial").addEventListener("click", function () {
      console.log("funcionou..")
      showTable(id, log, msgDate);

      let minutos = 0;
      let porcentagemBarra = 0;
      cron = setInterval(() => { timer(); }, 60000); // para fazer em minutos

      function timer() {
        if (minutos <= 60) {
          minutos++
          porcentagemBarra += 100 / 60; // 100% / 60 minutos
          console.log(porcentagemBarra)
          document.getElementById("progress-bar").style.width = `${porcentagemBarra}%`

        }
      }
      showProgressBar();
    })
  })
})

// YES DATABASE

buttonYesDB.addEventListener("click", function () {
  notShow("sectionOne");
  // Show Off Clock
  showClock();

  console.log("Database yes, upload then..");
  // console.log(presentJSON)

  // Read file .json
  document.getElementById("uploadJSON").addEventListener("click", function () {
    showTableEmpty();

    console.log("click uploadJson");
    var jsonUploaded = document.getElementById('fileInput').files[0];
    usingJSON(jsonUploaded)
  })
})

// Reader JSON

function usingJSON(databaseJSON) {
  let jsonReader = new FileReader();
  jsonReader.onload = function (e) {
    var content = e.target.result;
    var intern = JSON.parse(content); // parse json 

    // TODO
    // PROCESS JSON INTO LIST
    for (let i = 0; i < intern.length; i++) {
      let content = document.getElementById("content");
      content.innerHTML +=
        `
      <tr>
      <th scope="row">${intern[i].id}</th>
      <td>${intern[i].log.replaceAll("_", " ")}</td>
      <td>${intern[i].msgDate}</td>
      </tr>
      `

    }
    showButton("Começar Agora", "increment");
    increment.addEventListener('click', function () {
      sectionShowOff.innerHTML = ``;
      // show create log
      console.log("show create log");
      createLog();

      document.getElementById("createJsonFile").addEventListener("click", function () {
        console.log("incrementJsonFile");
        let id = intern.length
        id++ // add with day
        let msgDate = document.getElementById("date").value;
        // let log = toString(document.getElementById("logMessge").value);
        let log = document.getElementById("logMessge").value.replaceAll(" ", "_");

        console.log(id, msgDate, log);

        intern.push({ id, log: `${log}`, msgDate })
        baixarArquivoLocal('100DaysOfCode.json', intern)

        console.log(intern)

        showClock();
        showButton("Start And Save JSON");
        showProgressBar();
        showTableEmpty();
        showTableContent(intern);

      })
    })


  };
  jsonReader.readAsText(databaseJSON);

}



//=========================================
// Upload json File

window.addEventListener('', function () {

  var upload = document.getElementById('fileInput');

  // Make sure the DOM element exists
  if (upload) {
    upload.addEventListener('change', function () {
      // Make sure a file was selected
      if (upload.files.length > 0) {
        var reader = new FileReader(); // File reader to read the file 

        // This event listener will happen when the reader has read the file
        reader.addEventListener('load', function () {
          var result = JSON.parse(reader.result); // Parse the result into an object 

          for (let i = 0; i < result.length; i++) {

            const list = document.getElementById("tableList");
            list.innerHTML += `
                    <tr>
                    <th scope="row">${result[i].id}</th>
                    <td>${result[i].log}</td>
                    <td>${result[i].msgDate}</td>
                    <td id="btnCompatilhar">
                    <a href="#" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                    </svg></a>
                    </td>
                    </tr>
                    `;
          }
          

        });
        reader.readAsText(upload.files[0]); // Read the uploaded file

      }
    });
  }
});

// End upload Files
//============================================
