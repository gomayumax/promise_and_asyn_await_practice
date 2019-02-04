const apiResponse = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://api.zipaddress.net/?zipcode=900-0012";

  xhr.open(method, url, true)
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200) {
      resolve(xhr.response)
    }
  };
  xhr.responseType = 'json'
  xhr.send()
})

async function asyncCall() {
  try {
    const val = await apiResponse
    if (val.data.pref === '沖縄県') {
      console.log('はいさい')
    } else {
      console.log('うぇい')
    }
  } catch (e) {
    console.log('error:' + e)
  }
}

asyncCall()

console.log(apiResponse)
