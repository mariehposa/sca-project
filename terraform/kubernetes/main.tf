# Sca-project-backend deployment
resource "kubernetes_deployment" "backend" {
  metadata {
    name = "sca-project-backend"
    labels = {
      test = "sca-project-backend"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        test = "sca-project-backend"
      }
    }

    template {
      metadata {
        labels = {
          test = "sca-project-backend"
        }
      }

      spec {
        container {
          image = "mariehposa/backend:sca-project"
          name  = "sca-project-backend"

          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }

          liveness_probe {
            http_get {
              path = "/"
              port = 4000

              http_header {
                name  = "X-Custom-Header"
                value = "Awesome"
              }
            }

            initial_delay_seconds = 3
            period_seconds        = 3
          }
        }
      }
    }
  }
}
# Sca-project-frontend deployment
resource "kubernetes_deployment" "frontend" {
  metadata {
    name = "sca-project-frontend"
    labels = {
      test = "sca-project-frontend"
    }
  }

  spec {
    replicas = 1

    selector {
      match_labels = {
        test = "sca-project-frontend"
      }
    }

    template {
      metadata {
        labels = {
          test = "sca-project-frontend"
        }
      }

      spec {
        container {
          image = "mariehposa/frontend:sca-project"
          name  = "sca-project-frontend"

          resources {
            limits = {
              cpu    = "0.5"
              memory = "512Mi"
            }
            requests = {
              cpu    = "250m"
              memory = "50Mi"
            }
          }

          liveness_probe {
            http_get {
              path = "/"
              port = 3000

              http_header {
                name  = "X-Custom-Header"
                value = "Awesome"
              }
            }

            initial_delay_seconds = 3
            period_seconds        = 3
          }
          
        }
      }
    }
  }
}
# Sca-project-backend service
resource "kubernetes_service" "sca-project-backend-service" {
  metadata {
    name = "sca-project-backend-service"
  }
  spec {
    selector = {
      app = kubernetes_deployment.backend.metadata.0.labels.test
    }
    session_affinity = "ClientIP"
    port {
      port        = 4000
      target_port = 4000
    }

    type = "LoadBalancer"
  }
}
# Sca-project-frontend service
resource "kubernetes_service" "sca-project-frontend-service" {
  metadata {
    name = "sca-project-frontend-service"
  }
  spec {
    selector = {
      app = kubernetes_deployment.frontend.metadata.0.labels.test
    }
    session_affinity = "ClientIP"
    port {
      port        = 3000
      target_port = 3000
    }

    type = "LoadBalancer"
  }
}

