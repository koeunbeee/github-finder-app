const searchInput = document.querySelector('input');
const profileImg = document.getElementsByClassName('profile-img');
const viewProfileButton = document.getElementsByClassName(
  'view-profile-button'
);
const reposCount = document.getElementById('public-repos');
const gistsCount = document.getElementById('public-gists');
const followersCount = document.getElementById('followers');
const followingCount = document.getElementById('following');
const companyName = document.getElementById('company');
const websiteAdrres = document.getElementById('website');
const locationAdrres = document.getElementById('location');
const memberSince = document.getElementById('member-since');
const reposList = document.getElementsByClassName('repos-list');
const repoName = document.getElementById('repo-name');
const starsCount = document.getElementById('stars');
const watchersCount = document.getElementById('watchers');
const forksCount = document.getElementById('forks');

class User {
  userName;
  userImg;
  userUrl;
  followers;
  following;
  publicGists;
  publicRepos;
  company;
  blog;
  location;
  since;
  // reposUrl;
  constructor(
    login,
    avartarUrl,
    htmlUrl,
    followers,
    following,
    publicGists,
    publicRepos,
    company,
    blog,
    location,
    since
  ) {
    this.userName = login;
    this.userImg = avartarUrl;
    this.userUrl = htmlUrl;
    this.followers = followers;
    this.following = following;
    this.publicGists = publicGists;
    this.publicRepos = publicRepos;
    this.company = company;
    this.blog = blog;
    this.location = location;
    this.since = since;
  }
}

class Repos {
  repoName;
  starsCount;
  watchersCount;
  forksCount;
  constructor(name, stargazersCount, watchersCount, forksCount) {
    this.repoName = name;
    this.starsCount = stargazersCount;
    this.watchersCount = watchersCount;
    this.forksCount = forksCount;
  }
}

console.log(searchInput);
console.log(profileImg);

// function searchName() {
//   const isSearch = document.getElementsByClassName('search-Box').value;
//   console.log(isSearch);
//   isSearch.addEventListener('onkeypress', async (e) => {
//     if (e !== '') {
//       console.log(e.target.value);
//       const searched = e.target.value;
//       const searchGetData = await axios.get(
//         'https://api.github.com/users/' + isSearch
//       );

//       console.log(searchGetData);
//       console.log(e.target.value);
//       console.log(searched);
//     }
//  const searchName = e.target.value;
//   try {
//     const search = await axios.get(
//       'https://api.github.com/users/' + searchName
//     );
//   } catch (error) {
//     console.log('not found');
//   }
//   });
// }
searchInput.addEventListener('input', getData);

async function getData(e) {
  if (e) {
    const searched = e.target.value;
    const searchGetData = await axios.get(
      'https://api.github.com/users/' + searched
    );

    console.log(searchGetData);
    console.log(searched);
  } else {
    const searched = e.target.value;
    const searchGet = await axios.get(
      'https://api.github.com/users?q=' + searched + 'in:name'
    );
    console.log(searchGet);
  }
}
