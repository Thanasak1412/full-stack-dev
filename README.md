<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Architecture
```
https://app.diagrams.net/#G1utw774binyKHSjM729F8O2C-jkcg9swO#%7B%22pageId%22%3A%22Ys_GMBFzRlMeJVABxDxo%22%7D](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=web-board.drawio#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%22Ys_GMBFzRlMeJVABxDxo%22%3E7V1rc%2BI2F%2F41zLQf2PEVzMcAu91tky4Nybvtp4zACig1lmuLBPLrX8k3bEsJZgHLZDSTydhCvp3z6Og5j2S5Y45Wm99CECxvsAu9jqG5m4457hjGwOrR%2F6xgmxToPSctWYTITct2BVP0CtNCLS1dIxdGpYoEY4%2BgoFw4x74P56RUBsIQv5SrPWKvfNUALCBXMJ0Djy%2F9gVyyTEodW9uVf4VoscyurGvpLyuQVU4LoiVw8UuhyPzcMUchxiTZWm1G0GPGy%2BySHPfljV%2FzGwuhT%2Boc8Nfkv6X3auLpjf369%2BzG8gZk0u2b6c2RbfbE0KUGSHdxSJZ4gX3gfd6VDkO89l3ITqvRvV2da4wDWqjTwidIyDb1JlgTTIuWZOWlv8INIn%2Bzwz%2FZ6d4%2FhV%2FGm%2FTM8c422%2FFJuC0cxHb%2FKf62Oyzey47jzZRaLsLrcA7fsU0GNxAuIHnPhkZSkRmucIXUC79BvIL0hmiFEHqAoOcyskAK0EVeb%2BdDupG68QCXpud9Bt46vdKfcEM%2BPUWcp8t%2BfFkiAqcBiG3yQltz2Wdv2vEZhgRu3n3w9FezlzaFNBh0%2B05a8LJrWnrWXpaFZpUdeHJj9RyF%2F7dsY9TEv90q%2BPcGyqPHerTXKo8aXEAbgvm%2F0Hdp4dXkW8foefRhhi56ppsLtvnLnzAiv087Br2gdku3H9deUvnXrDa9k8IB7QuNluzIaHFWLxm6YKzef2vGYYb0UUkXeGjhd8wrRsmoOWAY2yersrN3cqooAL7wXDPq4UXshO4cezhMzoh8RBDwhKe8WlM70VPB8BlRP%2B3cnFyjfN2q9zkEdemprvEC%2BQcdcYcpLBlphYcdd0%2FvOr73KELYj86B0dQvYw8%2BktNANodjRu31mpDNKfLJMWtzmM0tW0JFMVSMbu9pRe17AEMay6j13wwRh6E%2FN3QVqMzhoxACQm%2Fny33gxhtnv%2BItBG4DlxlDD779PKcAcCGqHB91nfZBuHcp9OXnaUivJg2xBq3iIT0uukxwRFR0%2BQjR5QTBpKe1L5gYlxJM2M4Ehog%2BNwvukvKjfs3AlJ2wJYGpLwxMixBO%2F7pmrYZvG9ESBGxzvvUQdXZo7m8hswQW17O8IKfo39eEngam5VGCC90%2BEc20ys3KEGRGjqBVOedqVFmzLph7HbPMPSlNbN9ulBiYhboghG8lRx3DHJTTlXIWU3XnC1p5gHlg%2BIh9krVv1hjmS%2BS512CL18wuEaFOy%2FaGSxyiV1ofZC6lP4ckbdemVqoxZUem5wwh8%2FEk86peKboBm1LFaxCR7G6w54EgQjMvQ8uKtjXkDzEheNVYqK5AyhTJkJYoUr8HqvRqt3BOgL%2BgD7iDsF2%2BXt%2Fgr9cXXM6sXA14NDj6tEcfslYXcUjOH%2FQIcPPqMavP4Lpe060q8lj3HQMnpKnvKMnUxz5OoIg8r1JUyUKZx9AceFdp8Qq5btwHsVaC%2FMV1XG1s7UpuU%2BuwIkwPf%2FTiIZUlPZDm3OYwwMgnsbnsIf2jBhyx3sMeMy3IHuq7ffrHqodkRFkZCQGK0QQpVl8gwyvtBwkgYJa3pINh%2BX702A%2FWbRkF%2B8BZRcvpAh4vwLGA54NVGsio%2BahrFDaax0ZPOjYcDhvzOPtwHwBJ0EEoqaMdyypQAGkeIAPpABnwwSPOShVAWgEQXcBFmkWIwfNpj9rpwYvld4UQ6QixpSOEJ6XpUInKhI7MhIyKaFU7FcpzqA%2BbChk87VWp0ClD0QFobUsqZJjCVOhBAUMuMKTnQQY%2FXSLtoh5IPClAJcpSASI9DzL4uQkqUW4RQFqQB%2FHjy3ATIMocFUJagRD5eRA%2F0IeCB%2BC6FCOR6mEkw6Nu5nQ%2BePBabExOwSJ%2B1jiAMBwocDQODkM0F6RRcNiX86KPYCoI75i6UzrMNIvfO6fDTA3Ukjkd2X1%2FzEkdVkV2EiVwjU7qMPnEPogn9yl98bgZtv2yo5W%2BuIMcLxkoGemU3XTepi9HXzR5lUDpiy0AhnR90eTFAYIIs4vK%2BmQCQ7quaPKawJzSCJXxSQZGo3ritz9%2BXG9Mf3r%2FHX%2F%2Fn7P9dnfvjgXrAMzxarX2EdmqqCEZHNKlRFPN22s3QqSriaaauNdqhMiXFC1xD8MeVMkmx8kmdsYrD5ZN9He8%2FSFkE4sXRlV2fMpQZB08uiFdNrHE6m0umyimKwsa0oUTa4%2BipqAhCxrSpRNLkAMp6UQ%2BMORPxbJ4tVVlx21CiHT9xOJlV5Udtwkh0vUTu8%2F5%2FYIm3DS%2F9kq22NP%2BVaHatfiKxetkH2iiTq%2ByyJ%2F0iTpZ5P9YzaqrfdKMPU0r3jvdxLi6ax1lglJLmpttXYz%2FfzKEntjPVk0%2F99vlZlu5%2BSA32zXdnM0rbYmfe5fDknZ%2BtnSjUwneutmsu426ZKlV3u7rF%2BjtptYe1Op2yO1yKb96x5B9dSVedvmXH3D2K%2Bdy6WurO9I%2FO9H%2F8N3bEQ2hbmzrtyy48QOTV0FAC0Z4FWA%2FHhbnFwi%2BAWyNeS02HjMYk2Iu5iMFPekNyZHboxSa0a5R7WlIeqkZ7VrV6RtSberfLu7vqOB4vE%2BdlgVH%2FmWXCVjASBQS889VaXGVi4mGtvRo2BcsUZ9YuapAqvlYB%2Fm6Oj%2Bqaw9s3tcHLxl8nLP5Iaiv9NScr9Vo04GjTXkrupwJUH1%2BKkP69SIFhqbBIH3KU58fkRqDaDnDIHQVIJoHhPSJTg6fmU5EL7crLJwdC%2FLnNjn8XNn0M0ZjSADyeLKoYHF%2BWEif0DQwOL83mHRn2wcJKfnOuYWU0%2BfS6aEThuRdlmFXswzLrrg7SfvTwyoeP8XXP7JlWZT08jYK9kovg3atJOTw0kuuSAv1l1u4juKYaGj33%2Bi%2Fzx5kL3VdjhBjSRdiHF6IKdpcqTHHvR3HqTFGXTXGOJvHeTXmDrPRnxkIFaM6llE5lyfJOOJ5oSOVhEvBg3RVJlMByl0C61incE5E37JQqDg7KqRLM4OBVML9M2lXY%2BPXGY%2FeT7jtVhFuXbuctVYbz6JqO1XX2jXRbcDrZiP2tih7R5RGhx570YsG4fg%2FLaGEm%2FBjcdJTI7MvYMqNpkYDUTp6qB1VxnQYDqofUe6adXu%2BwdlwwL%2BYf7UmyxwLigwdR4bydnY5KdNA%2FCFzBQlpkJCeNemaI5NLtXtcIqdINchUr1VkSs%2FeKlQU%2BTi3Dtrl1uzOi536hI0hTGH4jOhTC4Ybkgoj4LGhZ426zNCGlHpB323tgENVf84Xq98XJ8%2FGqnWNp9UVyysKfdpBB8ORPuiga2IS%2FZbPFWM6kDHtmtXlsOi8ry%2BA4j6CoQKFPFC0gEeLcysFCnmgkD74oOvqfez93HovCzdaxsH5geerDcLCqT5f7%2B4mjHx7CF7Qa6e6iG6fS8QWfluBHwu4RrMQhIi9a5WasxshV9Huo51fWYCq368ZNU%2Fy4pXQ%2BXym5YLtk5o3fQgO3m1VreTawjvmmXYIwZx00ZwaTgGicUA0ybOFd8yz7AQQS4z%2F7T7icKVA0TgomuTZwjvmX858xa4CQuNAaME3uXjuwCJDEhi%2BUA6GPfo4queQgI0m38ASY4PXcotJBVNqYKiSipNo%2BfpPJhXmKabDiL3PU8mOpfm0jbDM4gvlk49Ifabi6LiQN7LLyTF0nlMWkfH0ombGSICF9ExD51llERYBiCJmR4WN5rEhPeHQeQm4iA2yDaBKRaVAQ34Kkt1AARuzebgNVKSQAQfpWUdOngufOvJo39GlZvMjlpiylXwVMhpHRpMfsBGn0IIvy8fIoAXIBQQrXEjARaOf%2FRXjgieeTxgpLEjAQt1pp%2BfDAk80VeIhERC1dayzjY3z7DIDRFcpFZIELOmg4DlmoLRMGVCQLmYKvt6u1Ah5eDijisnGMzEmxQXq6IMtb7ALWY3%2FAw%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
