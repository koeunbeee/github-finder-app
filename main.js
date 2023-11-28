const searchInput = document.querySelector('.search-Box');
const profileImg = document.querySelector('.profile-img');
const viewProfileButton = document.querySelector('.view-profile-button');
const reposCount = document.querySelector('#public-repos');
const gistsCount = document.querySelector('#public-gists');
const followersCount = document.querySelector('#followers');
const followingCount = document.querySelector('#following');
const companyName = document.querySelector('#company');
const websiteAdrres = document.querySelector('#website');
const locationAdrres = document.querySelector('#location');
const memberSince = document.querySelector('#member-since');
const reposList = document.querySelector('.repos-list');
const repoName = document.querySelector('#repo-name');
const starsCount = document.querySelector('#stars');
const watchersCount = document.querySelector('#watchers');
const forksCount = document.querySelector('#forks');

// function User(
//   profileName,
//   repo,
//   gist,
//   follower,
//   following,
//   company,
//   website,
//   location,
//   memberSince,
//   stars,
//   watchers,
//   forks
// ) {
//   this.profileName;
// }

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

//  searchInput.addEventListener('keydown', (e) => {
//   console.log('아');
//   const searchName = e.target.value;
//   try {
//     const search = await axios.get('https://api.github.com/users/' + searchName);
//   } catch (error) {
//     console.log('not found');
//   }
//  });
