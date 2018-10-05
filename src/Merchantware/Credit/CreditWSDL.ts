const CreditWSDL = `
<?xml version="1.0" encoding="utf-8"?>
<wsdl:definitions xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/" xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/" xmlns:mime="http://schemas.xmlsoap.org/wsdl/mime/" xmlns:tns="http://schemas.merchantwarehouse.com/merchantware/v45/" xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/" xmlns:s="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://schemas.xmlsoap.org/wsdl/soap12/" xmlns:http="http://schemas.xmlsoap.org/wsdl/http/" targetNamespace="http://schemas.merchantwarehouse.com/merchantware/v45/" xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">
  <wsdl:documentation xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">Provides payment, processing, and related services for both credit and debit cards.</wsdl:documentation>
  <wsdl:types>
    <s:schema elementFormDefault="qualified" targetNamespace="http://schemas.merchantwarehouse.com/merchantware/v45/">
      <s:element name="AdjustTip">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:TipRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="MerchantCredentials">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="MerchantName" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantSiteId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantKey" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="TipRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Token" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Amount" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="AdjustTipResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="AdjustTipResult" type="tns:TransactionResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="TransactionResponse45">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="ApprovalStatus" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Token" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AuthorizationCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TransactionDate" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Amount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="RemainingCardBalance" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Cardholder" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardType" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="FsaCard" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ReaderEntryMode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AvsResponse" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CvResponse" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ErrorMessage" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ExtraData" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="FraudScoring" type="tns:FraudScoring" />
          <s:element minOccurs="0" maxOccurs="1" name="Rfmiq" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DebitTraceNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Invoice" type="tns:Invoice" />
          <s:element minOccurs="0" maxOccurs="1" name="CustomerEmailAddress" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="FraudScoring">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="ExternalReference" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Recommendation" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Score" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Status" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="Invoice">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="TaxIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ProductDescription" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DiscountAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ShippingAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DutyAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DestinationPostalCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DestinationCountryCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ShipFromPostalCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AlternateTaxAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AlternateTaxRate" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="LineItems" type="tns:ArrayOfLineItem" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="ArrayOfLineItem">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="unbounded" name="LineItem" nillable="true" type="tns:LineItem" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="LineItem">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="CommodityCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Description" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Upc" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Quantity" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="UnitOfMeasure" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="UnitCost" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DiscountAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TotalAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TaxAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ExtendedAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DebitOrCreditIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="NetOrGrossIndicator" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="AttachSignature">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:SignatureRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="SignatureRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Token" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="VectorImageData" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="AttachSignatureResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="AttachSignatureResult" type="tns:SignatureResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="SignatureResponse45">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="UploadStatus" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Token" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TransactionDate" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ErrorMessage" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="Authorize">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="PaymentData" type="tns:PaymentData" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:AuthorizationRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="PaymentData">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Source" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TrackData" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PinBlock" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PinKsn" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ReaderEntryMode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ExpirationDate" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardHolder" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AvsStreetAddress" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AvsZipCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardVerificationValue" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Token" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="VaultToken" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="WalletId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EncryptedKeyedData" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PaymentCryptogram" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PaymentCryptogramType" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EncryptedPaymentData" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EciIndicator" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="AuthorizationRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Amount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="InvoiceNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="RegisterNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantTransactionId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardAcceptorTerminalId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardCaptureCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EcommerceTransactionIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PinAuthenticationCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosConditionCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosEntryMode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalCategoryCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalEntryCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalLocationIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EnablePartialAuthorization" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TaxAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PurchaseOrderNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CustomerCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Invoice" type="tns:Invoice" />
          <s:element minOccurs="0" maxOccurs="1" name="CustomerEmailAddress" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="AuthorizeResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="AuthorizeResult" type="tns:TransactionResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="BoardCard">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="PaymentData" type="tns:PaymentData" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:BoardingRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="BoardingRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="MerchantDefinedToken" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="BoardCardResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="BoardCardResult" type="tns:VaultBoardingResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="VaultBoardingResponse45">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="VaultToken" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ErrorCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ErrorMessage" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Rfmiq" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="UpdateBoardedCard">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:UpdateBoardedCardRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="UpdateBoardedCardRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="VaultToken" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ExpirationDate" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="UpdateBoardedCardResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="UpdateBoardedCardResult" type="tns:VaultBoardingResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="Capture">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:CaptureRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="CaptureRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Token" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Amount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="InvoiceNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="RegisterNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantTransactionId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardAcceptorTerminalId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MultipleClearing" type="tns:MultipleClearing" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="MultipleClearing">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="SequenceNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="SequenceCount" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="CaptureResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="CaptureResult" type="tns:TransactionResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="FindBoardedCard">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:VaultTokenRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="VaultTokenRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="VaultToken" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="FindBoardedCardResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="FindBoardedCardResult" type="tns:VaultTokenResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="VaultTokenResponse45">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="CardNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ExpirationDate" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Cardholder" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardType" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AvsStreetAddress" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AvsZipCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ErrorCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ErrorMessage" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Rfmiq" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="ForceCapture">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="PaymentData" type="tns:PaymentData" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:ForceCaptureRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="ForceCaptureRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Amount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AuthorizationCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="InvoiceNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="RegisterNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantTransactionId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardAcceptorTerminalId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardCaptureCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EcommerceTransactionIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PinAuthenticationCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosConditionCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosEntryMode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalCategoryCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalEntryCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalLocationIndicator" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="ForceCaptureResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="ForceCaptureResult" type="tns:TransactionResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="Refund">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="PaymentData" type="tns:PaymentData" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:RefundRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="RefundRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Amount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="InvoiceNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="RegisterNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantTransactionId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardAcceptorTerminalId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardCaptureCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EcommerceTransactionIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PinAuthenticationCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosConditionCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosEntryMode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalCategoryCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalEntryCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalLocationIndicator" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="RefundResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="RefundResult" type="tns:TransactionResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="Sale">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="PaymentData" type="tns:PaymentData" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:SaleRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="SaleRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Amount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CashbackAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="SurchargeAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TaxAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="HealthCareAmountDetails" type="tns:HealthCareAmountDetails" />
          <s:element minOccurs="0" maxOccurs="1" name="InvoiceNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PurchaseOrderNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CustomerCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="RegisterNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantTransactionId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardAcceptorTerminalId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EnablePartialAuthorization" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ForceDuplicate" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardCaptureCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="EcommerceTransactionIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PinAuthenticationCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosConditionCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PosEntryMode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalCategoryCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalEntryCapability" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="TerminalLocationIndicator" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="Invoice" type="tns:Invoice" />
          <s:element minOccurs="0" maxOccurs="1" name="CustomerEmailAddress" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:complexType name="HealthCareAmountDetails">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="CopayAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ClinicalAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="DentalAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="HealthCareTotalAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="PrescriptionAmount" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="VisionAmount" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="SaleResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="SaleResult" type="tns:TransactionResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="SettleBatch">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="SettleBatchResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="SettleBatchResult" type="tns:BatchResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="BatchResponse45">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="BatchStatus" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="AuthorizationCode" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="BatchAmount" type="s:string" />
          <s:element minOccurs="1" maxOccurs="1" name="TransactionCount" type="s:int" />
          <s:element minOccurs="0" maxOccurs="1" name="TransactionDate" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ErrorMessage" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="ExtraData" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="UnboardCard">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:VaultTokenRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="UnboardCardResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="UnboardCardResult" type="tns:VaultBoardingResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:element name="Void">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="Credentials" type="tns:MerchantCredentials" />
            <s:element minOccurs="0" maxOccurs="1" name="Request" type="tns:VoidRequest" />
          </s:sequence>
        </s:complexType>
      </s:element>
      <s:complexType name="VoidRequest">
        <s:sequence>
          <s:element minOccurs="0" maxOccurs="1" name="Token" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="RegisterNumber" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="MerchantTransactionId" type="s:string" />
          <s:element minOccurs="0" maxOccurs="1" name="CardAcceptorTerminalId" type="s:string" />
        </s:sequence>
      </s:complexType>
      <s:element name="VoidResponse">
        <s:complexType>
          <s:sequence>
            <s:element minOccurs="0" maxOccurs="1" name="VoidResult" type="tns:TransactionResponse45" />
          </s:sequence>
        </s:complexType>
      </s:element>
    </s:schema>
  </wsdl:types>
  <wsdl:message name="AdjustTipSoapIn">
    <wsdl:part name="parameters" element="tns:AdjustTip" />
  </wsdl:message>
  <wsdl:message name="AdjustTipSoapOut">
    <wsdl:part name="parameters" element="tns:AdjustTipResponse" />
  </wsdl:message>
  <wsdl:message name="AttachSignatureSoapIn">
    <wsdl:part name="parameters" element="tns:AttachSignature" />
  </wsdl:message>
  <wsdl:message name="AttachSignatureSoapOut">
    <wsdl:part name="parameters" element="tns:AttachSignatureResponse" />
  </wsdl:message>
  <wsdl:message name="AuthorizeSoapIn">
    <wsdl:part name="parameters" element="tns:Authorize" />
  </wsdl:message>
  <wsdl:message name="AuthorizeSoapOut">
    <wsdl:part name="parameters" element="tns:AuthorizeResponse" />
  </wsdl:message>
  <wsdl:message name="BoardCardSoapIn">
    <wsdl:part name="parameters" element="tns:BoardCard" />
  </wsdl:message>
  <wsdl:message name="BoardCardSoapOut">
    <wsdl:part name="parameters" element="tns:BoardCardResponse" />
  </wsdl:message>
  <wsdl:message name="UpdateBoardedCardSoapIn">
    <wsdl:part name="parameters" element="tns:UpdateBoardedCard" />
  </wsdl:message>
  <wsdl:message name="UpdateBoardedCardSoapOut">
    <wsdl:part name="parameters" element="tns:UpdateBoardedCardResponse" />
  </wsdl:message>
  <wsdl:message name="CaptureSoapIn">
    <wsdl:part name="parameters" element="tns:Capture" />
  </wsdl:message>
  <wsdl:message name="CaptureSoapOut">
    <wsdl:part name="parameters" element="tns:CaptureResponse" />
  </wsdl:message>
  <wsdl:message name="FindBoardedCardSoapIn">
    <wsdl:part name="parameters" element="tns:FindBoardedCard" />
  </wsdl:message>
  <wsdl:message name="FindBoardedCardSoapOut">
    <wsdl:part name="parameters" element="tns:FindBoardedCardResponse" />
  </wsdl:message>
  <wsdl:message name="ForceCaptureSoapIn">
    <wsdl:part name="parameters" element="tns:ForceCapture" />
  </wsdl:message>
  <wsdl:message name="ForceCaptureSoapOut">
    <wsdl:part name="parameters" element="tns:ForceCaptureResponse" />
  </wsdl:message>
  <wsdl:message name="RefundSoapIn">
    <wsdl:part name="parameters" element="tns:Refund" />
  </wsdl:message>
  <wsdl:message name="RefundSoapOut">
    <wsdl:part name="parameters" element="tns:RefundResponse" />
  </wsdl:message>
  <wsdl:message name="SaleSoapIn">
    <wsdl:part name="parameters" element="tns:Sale" />
  </wsdl:message>
  <wsdl:message name="SaleSoapOut">
    <wsdl:part name="parameters" element="tns:SaleResponse" />
  </wsdl:message>
  <wsdl:message name="SettleBatchSoapIn">
    <wsdl:part name="parameters" element="tns:SettleBatch" />
  </wsdl:message>
  <wsdl:message name="SettleBatchSoapOut">
    <wsdl:part name="parameters" element="tns:SettleBatchResponse" />
  </wsdl:message>
  <wsdl:message name="UnboardCardSoapIn">
    <wsdl:part name="parameters" element="tns:UnboardCard" />
  </wsdl:message>
  <wsdl:message name="UnboardCardSoapOut">
    <wsdl:part name="parameters" element="tns:UnboardCardResponse" />
  </wsdl:message>
  <wsdl:message name="VoidSoapIn">
    <wsdl:part name="parameters" element="tns:Void" />
  </wsdl:message>
  <wsdl:message name="VoidSoapOut">
    <wsdl:part name="parameters" element="tns:VoidResponse" />
  </wsdl:message>
  <wsdl:portType name="CreditSoap">
    <wsdl:operation name="AdjustTip">
      <wsdl:input message="tns:AdjustTipSoapIn" />
      <wsdl:output message="tns:AdjustTipSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="AttachSignature">
      <wsdl:input message="tns:AttachSignatureSoapIn" />
      <wsdl:output message="tns:AttachSignatureSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="Authorize">
      <wsdl:input message="tns:AuthorizeSoapIn" />
      <wsdl:output message="tns:AuthorizeSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="BoardCard">
      <wsdl:input message="tns:BoardCardSoapIn" />
      <wsdl:output message="tns:BoardCardSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="UpdateBoardedCard">
      <wsdl:input message="tns:UpdateBoardedCardSoapIn" />
      <wsdl:output message="tns:UpdateBoardedCardSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="Capture">
      <wsdl:input message="tns:CaptureSoapIn" />
      <wsdl:output message="tns:CaptureSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="FindBoardedCard">
      <wsdl:input message="tns:FindBoardedCardSoapIn" />
      <wsdl:output message="tns:FindBoardedCardSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="ForceCapture">
      <wsdl:input message="tns:ForceCaptureSoapIn" />
      <wsdl:output message="tns:ForceCaptureSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="Refund">
      <wsdl:input message="tns:RefundSoapIn" />
      <wsdl:output message="tns:RefundSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="Sale">
      <wsdl:input message="tns:SaleSoapIn" />
      <wsdl:output message="tns:SaleSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="SettleBatch">
      <wsdl:input message="tns:SettleBatchSoapIn" />
      <wsdl:output message="tns:SettleBatchSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="UnboardCard">
      <wsdl:input message="tns:UnboardCardSoapIn" />
      <wsdl:output message="tns:UnboardCardSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="Void">
      <wsdl:input message="tns:VoidSoapIn" />
      <wsdl:output message="tns:VoidSoapOut" />
    </wsdl:operation>
  </wsdl:portType>
  <wsdl:portType name="CreditHttpPost" />
  <wsdl:binding name="CreditSoap" type="tns:CreditSoap">
    <soap:binding transport="http://schemas.xmlsoap.org/soap/http" />
    <wsdl:operation name="AdjustTip">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/AdjustTip" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="AttachSignature">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/AttachSignature" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Authorize">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Authorize" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="BoardCard">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/BoardCard" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="UpdateBoardedCard">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/UpdateBoardedCard" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Capture">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Capture" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="FindBoardedCard">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/FindBoardedCard" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="ForceCapture">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/ForceCapture" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Refund">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Refund" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Sale">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Sale" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="SettleBatch">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/SettleBatch" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="UnboardCard">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/UnboardCard" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Void">
      <soap:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Void" style="document" />
      <wsdl:input>
        <soap:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:binding name="CreditSoap12" type="tns:CreditSoap">
    <soap12:binding transport="http://schemas.xmlsoap.org/soap/http" />
    <wsdl:operation name="AdjustTip">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/AdjustTip" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="AttachSignature">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/AttachSignature" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Authorize">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Authorize" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="BoardCard">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/BoardCard" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="UpdateBoardedCard">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/UpdateBoardedCard" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Capture">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Capture" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="FindBoardedCard">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/FindBoardedCard" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="ForceCapture">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/ForceCapture" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Refund">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Refund" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Sale">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Sale" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="SettleBatch">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/SettleBatch" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="UnboardCard">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/UnboardCard" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Void">
      <soap12:operation soapAction="http://schemas.merchantwarehouse.com/merchantware/v45/Void" style="document" />
      <wsdl:input>
        <soap12:body use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap12:body use="literal" />
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>
  <wsdl:binding name="CreditHttpPost" type="tns:CreditHttpPost">
    <http:binding verb="POST" />
  </wsdl:binding>
  <wsdl:service name="Credit">
    <wsdl:documentation xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/">Provides payment, processing, and related services for both credit and debit cards.</wsdl:documentation>
    <wsdl:port name="CreditSoap" binding="tns:CreditSoap">
      <soap:address location="https://ps1.merchantware.net/Merchantware/ws/RetailTransaction/v45/Credit.asmx" />
    </wsdl:port>
    <wsdl:port name="CreditSoap12" binding="tns:CreditSoap12">
      <soap12:address location="https://ps1.merchantware.net/Merchantware/ws/RetailTransaction/v45/Credit.asmx" />
    </wsdl:port>
    <wsdl:port name="CreditHttpPost" binding="tns:CreditHttpPost">
      <http:address location="https://ps1.merchantware.net/Merchantware/ws/RetailTransaction/v45/Credit.asmx" />
    </wsdl:port>
  </wsdl:service>
</wsdl:definitions>
`;

export default CreditWSDL;
