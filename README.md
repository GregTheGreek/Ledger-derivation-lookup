# Ledger Derivation Lookup

Really easily lookup address at common derivation paths.

## Example output
```
Default: m/44'/60'/i'/0/0
---------------------
0: 0x0000000000000000000000000000000000000000 (2.0 ether)
1: 0x1111111111111111111111111111111111111111 (0.0001 ether)
2: 0x2222222222222222222222222222222222222222 (111.0002 ether)
3: 0x3333333333333333333333333333333333333333 (0.0 ether)
...

Ledger: m/44'/60'/0'/i
---------------------
0: 0x0000000000000000000000000000000000000000 (2.0 ether)
1: 0x1111111111111111111111111111111111111111 (0.0001 ether)
2: 0x2222222222222222222222222222222222222222 (111.0002 ether)
3: 0x3333333333333333333333333333333333333333 (0.0 ether)
...

Ledger Live: m/44'/60'/0'/i/0/0
---------------------
0: 0x0000000000000000000000000000000000000000 (2.0 ether)
1: 0x1111111111111111111111111111111111111111 (0.0001 ether)
2: 0x2222222222222222222222222222222222222222 (111.0002 ether)
3: 0x3333333333333333333333333333333333333333 (0.0 ether)
...
```

## Install
1. yarn

## Run
1. Connect your ledger device
2. Open the ethereum app
3. Run `node index.js [url_to_rpc_node]`

## Troubleshooting
### Seeing strange "connection" errors
Make sure something else isn't connecting to your ledger. An example would be having the Frame
wallet open.
