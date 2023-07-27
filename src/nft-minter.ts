import {
  ApprovalForAll as ApprovalForAllEvent,
  Initialized as InitializedEvent,
  TransferBatch as TransferBatchEvent,
  TransferBatch1 as TransferBatch1Event,
  TransferSingle as TransferSingleEvent,
  URI as URIEvent
} from "../generated/NftMinter/NftMinter"
import {
  Collection
} from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  // let entity = new ApprovalForAll(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.account = event.params.account
  // entity.operator = event.params.operator
  // entity.approved = event.params.approved

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  // let entity = new Initialized(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.version = event.params.version

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}


export function handleTransferBatch1(event: TransferBatch1Event): void {
  // let entity = new TransferBatch1(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.operator = event.params.operator
  // entity.from = event.params.from
  // entity.to = event.params.to
  // entity.ids = event.params.ids
  // entity.values = event.params.values

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  // let entity = new TransferSingle(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.operator = event.params.operator
  // entity.from = event.params.from
  // entity.to = event.params.to
  // entity.NftMinter_id = event.params.id
  // entity.value = event.params.value

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}

export function handleURI(event: URIEvent): void {
  // let entity = new URI(event.transaction.hash.concatI32(event.logIndex.toI32()))
  // entity.value = event.params.value
  // entity.NftMinter_id = event.params.id

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}



//===============================================================

export function handleTransferBatch(event: TransferBatchEvent): void {
  // let entity = new TransferBatch(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // )
  // entity.operator = event.params.operator
  // entity.from = event.params.from
  // entity.to = event.params.to
  // entity.ids = event.params.ids

  // entity.blockNumber = event.block.number
  // entity.blockTimestamp = event.block.timestamp
  // entity.transactionHash = event.transaction.hash

  // entity.save()
}