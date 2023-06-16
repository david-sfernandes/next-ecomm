export class ProductRequest {
  data = new FormData();

  constructor(product: ProductProps, file: File) {
    this.data.append("file", file);

    this.data.append("name", product.name);
    this.data.append("id", product.id.toString());
    this.data.append("price", product.price.toString());
    this.data.append("quantity", product.quantity.toString());
    this.data.append("description", product.description);
    this.data.append("isImage", "true");
    this.data.append("isVideo", "false");

    // void args
    this.data.append("url", "");
    this.data.append("type", "");
    this.data.append("format", "");
    this.data.append("version", "0");
    this.data.append("publicId", "");
    this.data.append("signature", "");
    this.data.append("resourceType", "");
    this.data.append("preloadedFile", "");
    this.data.append("computedSignature", "");
  }
}
