import { expect, assert } from "chai";
import nock from "nock";
import fs from "fs";
import { MerchantwareCreditClient } from "../lib";
import {
  IPaymentData,
  IAuthorizationRequest,
  ITipRequest,
  ISignatureRequest,
  ICaptureRequest,
  IVaultTokenRequest,
  CardType,
  IUpdateBoardedCardRequest,
  ISaleRequest,
  IVoidRequest
} from "../lib/Merchantware/Credit/definitions";

describe("MerchantwareCreditClient", () => {
  const config = {
    MerchantName: "ZERO INC",
    MerchantSiteId: "00000000",
    MerchantKey: "00000-00000-00000-00000-00000"
  };

  const stubSoap = (xml = null) => {
    if (xml) {
      return nock("https://ps1.merchantware.net").post(
        "/Merchantware/ws/RetailTransaction/v45/Credit.asmx",
        xml
      );
    } else {
      return nock("https://ps1.merchantware.net").post(
        "/Merchantware/ws/RetailTransaction/v45/Credit.asmx"
      );
    }
  };

  let client: MerchantwareCreditClient = null;

  before(async () => {
    client = await MerchantwareCreditClient.createInstance(config);
  });

  it("is defined", () => {
    expect(MerchantwareCreditClient).to.not.be.undefined;
  });

  describe("AdjustTip", async () => {
    it("adds or alters the tip amount to a prior transaction", async () => {
      const request: ITipRequest = { Amount: "1.00", Token: "1236559" };

      stubSoap(AdjustTipXML).reply(
        201,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/AdjustTip.xml"
        )
      );

      const result = await client.AdjustTip(request);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }

      expect(result.ApprovalStatus).to.equal("APPROVED");
      expect(result.Token).to.equal("1236560");
      expect(result.TransactionDate).to.equal("3/14/2016 7:54:23 PM");
    });

    it("returns an error for failed fetch", async () => {
      stubSoap(AdjustTipXML).reply(500, null);

      const request: ITipRequest = { Amount: "1.00", Token: "1236559" };
      const result = await client.AdjustTip(request);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("AttachSignature", () => {
    it("appends a signature record to an existing transaction", async () => {
      const request: ISignatureRequest = {
        Token: "608957",
        ImageData: "10,10^110,110^0,65535^10,110^110,10^0,65535^~"
      };

      stubSoap(AttachSignatureXML).reply(
        201,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/AttachSignature.xml"
        )
      );

      const result = await client.AttachSignature(request);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }

      expect(result.UploadStatus).to.equal("ACCEPTED");
      expect(result.Token).to.equal("608957");
      expect(result.TransactionDate).to.equal("3/14/2016 7:57:32 PM");
    });

    it("returns an error for failed fetch", async () => {
      stubSoap(AttachSignatureXML).reply(500, null);

      const request: ISignatureRequest = {
        Token: "608957",
        ImageData: "10,10^110,110^0,65535^10,110^110,10^0,65535^~"
      };
      const result = await client.AttachSignature(request);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("Authorize", () => {
    it("applies an authorization to a credit card which can be captured at a later time", async () => {
      const paymentData: IPaymentData = {
        Source: "KEYED",
        CardNumber: "4012000033330026",
        ExpirationDate: "1219"
      };

      const transaction: IAuthorizationRequest = {
        Amount: "1.01",
        RegisterNumber: "1",
        CardAcceptorTerminalId: "1",
        MerchantTransactionId: "1000"
      };

      stubSoap(AuthorizeXML).reply(
        201,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/Authorize.xml"
        )
      );

      const result = await client.Authorize(paymentData, transaction);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }

      expect(result.ApprovalStatus).to.equal("APPROVED");
    });

    it("returns an error for failed fetch", async () => {
      const paymentData: IPaymentData = {
        Source: "KEYED",
        CardNumber: "4012000033330026",
        ExpirationDate: "1219"
      };

      const transaction: IAuthorizationRequest = {
        Amount: "1.01",
        RegisterNumber: "1",
        CardAcceptorTerminalId: "1",
        MerchantTransactionId: "1000"
      };

      stubSoap(AuthorizeXML).reply(500, null);

      const result = await client.Authorize(paymentData, transaction);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("BoardCard", () => {
    it("stores payment information for a credit card into the Merchantware Vault", async () => {
      const paymentData: IPaymentData = {
        Source: "KEYED",
        CardNumber: "4012000033330026",
        ExpirationDate: "1219"
      };

      stubSoap(BoardCardXML).reply(
        201,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/BoardCard.xml"
        )
      );

      const result = await client.BoardCard(paymentData);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }

      expect(result.VaultToken).to.equal("1000000000002WSZECPL");
    });

    it("returns an error for failed fetch", async () => {
      const paymentData: IPaymentData = {
        Source: "KEYED",
        CardNumber: "4012000033330026",
        ExpirationDate: "1219"
      };

      stubSoap(BoardCardXML).reply(500, null);

      const result = await client.BoardCard(paymentData);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("Capture", () => {
    it("completes a transaction for a prior authorization", async () => {
      const request: ICaptureRequest = {
        Token: "608939",
        Amount: "1.50",
        InvoiceNumber: "1556",
        RegisterNumber: "35",
        MerchantTransactionId: "167902",
        CardAcceptorTerminalId: "3"
      };

      stubSoap(CaptureXML).reply(
        201,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/Capture.xml"
        )
      );

      const result = await client.Capture(request);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }

      expect(result.ApprovalStatus).to.equal("APPROVED");
      expect(result.Token).to.equal("608961");
      expect(result.AuthorizationCode).to.equal("OK036C");
      expect(result.TransactionDate).to.equal("3/14/2016 8:09:31 PM");
      expect(result.Amount).to.equal("1.50");
      expect(result.ReaderEntryMode).to.equal("3");
    });

    it("returns an error for failed fetch", async () => {
      const request: ICaptureRequest = {
        Token: "608939",
        Amount: "1.50",
        InvoiceNumber: "1556",
        RegisterNumber: "35",
        MerchantTransactionId: "167902",
        CardAcceptorTerminalId: "3"
      };

      stubSoap(CaptureXML).reply(500, null);

      const result = await client.Capture(request);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("FindBoardedCard", () => {
    it("retrieves the payment data stored inside the Merchantware Vault", async () => {
      const request: IVaultTokenRequest = {
        VaultToken: "127MMEIIQVEW2WSZECPL"
      };

      stubSoap(FindBoardedCardXML).reply(
        200,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/FindBoardedCard.xml"
        )
      );

      const result = await client.FindBoardedCard(request);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }

      expect(result.CardNumber).to.equal("0026");
      expect(result.ExpirationDate).to.equal("1218");
      expect(result.CardType).to.equal(CardType.Visa);
    });

    it("returns an error for failed fetch", async () => {
      const request: IVaultTokenRequest = {
        VaultToken: "127MMEIIQVEW2WSZECPL"
      };

      stubSoap(FindBoardedCardXML).reply(500, null);

      const result = await client.FindBoardedCard(request);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("UpdateBoardedCard", () => {
    it("changes the expiration date for an existing payment method stored inside the Merchantware Vault", async () => {
      const request: IUpdateBoardedCardRequest = {
        VaultToken: "127MMEIIQVEW2WSZECPL",
        ExpirationDate: "0118"
      };

      stubSoap(UpdateBoardedCardXML).reply(
        200,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/UpdateBoardedCard.xml"
        )
      );

      const result = await client.UpdateBoardedCard(request);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }
    });

    it("returns an error for failed fetch", async () => {
      const request: IUpdateBoardedCardRequest = {
        VaultToken: "127MMEIIQVEW2WSZECPL",
        ExpirationDate: "0118"
      };

      stubSoap(UpdateBoardedCardXML).reply(500, null);

      const result = await client.UpdateBoardedCard(request);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("Sale", () => {
    it("Creates a sale", async () => {
      const request: ISaleRequest = {
        Amount: 1.05,
        CashbackAmount: 0.0,
        SurchargeAmount: 0.0,
        TaxAmount: 0.0,
        InvoiceNumber: "1556",
        PurchaseOrderNumber: "17801",
        CustomerCode: "20",
        RegisterNumber: "35",
        MerchantTransactionId: "166901",
        CardAcceptorTerminalId: "3",
        EnablePartialAuthorization: false,
        ForceDuplicate: false
      };

      const paymentData: IPaymentData = {
        Source: "KEYED",
        CardNumber: "4012000033330026",
        ExpirationDate: "1219"
      };

      stubSoap(SaleXML).reply(
        201,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/Sale.xml"
        )
      );

      const result = await client.Sale(paymentData, request);
      if (result instanceof Error) {
        assert(false, "Result is an error");
        return;
      }

      expect(result.ApprovalStatus).to.equal("APPROVED");
      expect(result.Token).to.equal("608957");
      expect(result.AuthorizationCode).to.equal("OK775C");
      expect(result.TransactionDate).to.equal("3/14/2016 7:57:22 PM");
      expect(result.Amount).to.equal("1.05");
      expect(result.RemainingCardBalance).to.equal("");
      expect(result.CardNumber).to.equal("************0026");
      expect(result.Cardholder).to.equal("John Doe");
      expect(result.CardType).to.equal("4");
      expect(result.FsaCard).to.equal("");
      expect(result.ReaderEntryMode).to.equal("1");
      expect(result.AvsResponse).to.equal("Y");
      expect(result.CvResponse).to.be.equal("");
      expect(result.ErrorMessage).to.equal("");
      expect(result.ExtraData).to.equal("");
      expect(result.Rfmiq).to.equal("10000ABCDE");
    });

    it("returns an error for failed fetch", async () => {
      const request: ISaleRequest = {
        Amount: 1.05,
        CashbackAmount: 0.0,
        SurchargeAmount: 0.0,
        TaxAmount: 0.0,
        InvoiceNumber: "1556",
        PurchaseOrderNumber: "17801",
        CustomerCode: "20",
        RegisterNumber: "35",
        MerchantTransactionId: "166901",
        CardAcceptorTerminalId: "3",
        EnablePartialAuthorization: false,
        ForceDuplicate: false
      };

      const paymentData: IPaymentData = {
        Source: "KEYED",
        CardNumber: "4012000033330026",
        ExpirationDate: "1219"
      };

      stubSoap(SaleXML).reply(500, null);

      const result = await client.Sale(paymentData, request);
      expect(result instanceof Error).to.be.true;
    });
  });

  describe("Void", () => {
    it("Void a sale", async () => {
      const request: IVoidRequest = { Token: "608974" };

      stubSoap(VoidXML).reply(
        201,
        fs.readFileSync(
          __dirname + "/fixtures/xml/Merchantware/Credit/Void.xml"
        )
      );

      const result = await client.Void(request);
      if (result instanceof Error) {
        assert(false, result.message);
        return;
      }

      // DECLINED;1019;original transaction id not found

      expect(result.ApprovalStatus).to.equal("APPROVED");
      expect(result.Token).to.equal("608974");
      expect(result.AuthorizationCode).to.equal("VOID");
      expect(result.TransactionDate).to.equal("5/8/2019 4:16:51 PM");
      expect(result.Amount).to.equal("");
      expect(result.RemainingCardBalance).to.equal("");
      expect(result.CardNumber).to.equal("");
      expect(result.Cardholder).to.equal("");
      expect(result.CardType).to.equal("0");
      expect(result.FsaCard).to.equal("");
      expect(result.ReaderEntryMode).to.equal("0");
      expect(result.AvsResponse).to.equal("");
      expect(result.CvResponse).to.be.equal("");
      expect(result.ErrorMessage).to.equal("");
      expect(result.ExtraData).to.equal("");
    });

    it("returns an error for failed fetch", async () => {
      const request: IVoidRequest = { Token: "608974" };

      stubSoap(VoidXML).reply(500, null);

      const result = await client.Void(request);
      expect(result instanceof Error).to.be.true;
    });
  });
});

const AdjustTipXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><AdjustTip xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><Request><Amount>1.00</Amount><Token>1236559</Token></Request></AdjustTip></soap:Body></soap:Envelope>`;
const AttachSignatureXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><AttachSignature xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><Request><Token>608957</Token><ImageData>10,10^110,110^0,65535^10,110^110,10^0,65535^~</ImageData></Request></AttachSignature></soap:Body></soap:Envelope>`;
const AuthorizeXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><Authorize xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><PaymentData><Source>KEYED</Source><CardNumber>4012000033330026</CardNumber><ExpirationDate>1219</ExpirationDate></PaymentData><Request><Amount>1.01</Amount><RegisterNumber>1</RegisterNumber><CardAcceptorTerminalId>1</CardAcceptorTerminalId><MerchantTransactionId>1000</MerchantTransactionId></Request></Authorize></soap:Body></soap:Envelope>`;
const BoardCardXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><BoardCard xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><PaymentData><Source>KEYED</Source><CardNumber>4012000033330026</CardNumber><ExpirationDate>1219</ExpirationDate></PaymentData></BoardCard></soap:Body></soap:Envelope>`;
const CaptureXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><Capture xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><Request><Token>608939</Token><Amount>1.50</Amount><InvoiceNumber>1556</InvoiceNumber><RegisterNumber>35</RegisterNumber><MerchantTransactionId>167902</MerchantTransactionId><CardAcceptorTerminalId>3</CardAcceptorTerminalId></Request></Capture></soap:Body></soap:Envelope>`;
const FindBoardedCardXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><FindBoardedCard xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><Request><VaultToken>127MMEIIQVEW2WSZECPL</VaultToken></Request></FindBoardedCard></soap:Body></soap:Envelope>`;
const UpdateBoardedCardXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><UpdateBoardedCard xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><Request><VaultToken>127MMEIIQVEW2WSZECPL</VaultToken><ExpirationDate>0118</ExpirationDate></Request></UpdateBoardedCard></soap:Body></soap:Envelope>`;
const SaleXML = `<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xmlns:tm=\"http://microsoft.com/wsdl/mime/textMatching/\" xmlns:tns=\"http://schemas.merchantwarehouse.com/merchantware/v45/\"><soap:Body><Sale xmlns=\"http://schemas.merchantwarehouse.com/merchantware/v45/\"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><PaymentData><Source>KEYED</Source><CardNumber>4012000033330026</CardNumber><ExpirationDate>1219</ExpirationDate></PaymentData><Request><Amount>1.05</Amount><CashbackAmount>0</CashbackAmount><SurchargeAmount>0</SurchargeAmount><TaxAmount>0</TaxAmount><InvoiceNumber>1556</InvoiceNumber><PurchaseOrderNumber>17801</PurchaseOrderNumber><CustomerCode>20</CustomerCode><RegisterNumber>35</RegisterNumber><MerchantTransactionId>166901</MerchantTransactionId><CardAcceptorTerminalId>3</CardAcceptorTerminalId><EnablePartialAuthorization>false</EnablePartialAuthorization><ForceDuplicate>false</ForceDuplicate></Request></Sale></soap:Body></soap:Envelope>`;
const VoidXML = `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/"><soap:Body><Void xmlns="http://schemas.merchantwarehouse.com/merchantware/v45/"><Credentials><MerchantName>ZERO INC</MerchantName><MerchantSiteId>00000000</MerchantSiteId><MerchantKey>00000-00000-00000-00000-00000</MerchantKey></Credentials><Request><Token>608974</Token></Request></Void></soap:Body></soap:Envelope>`;
