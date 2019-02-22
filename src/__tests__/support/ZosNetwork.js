module.exports = {
  "contracts": {
    "Migrations": {
      "address": "0x0f972e6007aef1cc3a64ee3affd697a33bf2fdf3"
    },
    "ZepToken": {
      "address": "0xe0549b2bdb7d477f75f946470e79686047b23604"
    }
  },
  "proxies": {
    "zos-vouching-mock/Migrations": [
      {
        "address": "0xed2e80dd89d2252eb65031dd3a56c31345572a58",
        "version": "0.1.0",
        "implementation": "0x0f972e6007aef1cc3a64ee3affd697a33bf2fdf3"
      }
    ],
    "zos-vouching-mock/ZepToken": [
      {
        "address": "0xe49814c4777138ff7757f222a475713794fa5a80",
        "version": "0.1.0",
        "implementation": "0xe0549b2bdb7d477f75f946470e79686047b23604"
      }
    ],
    "zos-vouching-mock/MockVouching": [
      {
        "address": "0xfc5c400518b36b6e04dae0427cc03072477180e8",
        "version": "0.1.0",
        "implementation": "0x0f3823710ae9f23df46f03de218895f6316a0e32"
      }
    ]
  },
  "zosversion": "2",
  "version": "0.1.0"
}
